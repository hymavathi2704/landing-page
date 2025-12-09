// server.js (Refactored to use external model and mailer)
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); 

const waitlistModel = require('./waitlistModel'); // Import database logic
const mailer = require('./mailer'); // Import email logic <-- NEW

const app = express();
const PORT = process.env.PORT || 5000; 

// --- Middleware ---

app.use(cors({
    origin: 'http://localhost:4028' 
}));

app.use(bodyParser.json());

// --- API Endpoint: POST /api/waitlist ---

app.post('/api/waitlist', async (req, res) => {
    const { name, email, phone, role, notes } = req.body;

    if (!name || !email || !role) {
        return res.status(400).json({ message: 'Missing required fields: name, email, and role.' });
    }

    try {
        // 1. Check for duplicate email and create entry (DB Logic)
        const existingEntry = await waitlistModel.findByEmail(email);
        if (existingEntry) {
            return res.status(409).json({ message: 'Email address is already on the waitlist. Thank you for your continued interest!' });
        }

        const result = await waitlistModel.createEntry({ name, email, phone, role, notes });
        console.log(`New waitlist entry recorded for ID: ${result.insertId}`);

        // 2. Send confirmation email (Mailer Logic)
        // Note: We intentionally DO NOT 'await' the email sending strictly here
        // to return the HTTP response faster. The mailer handles its own success/fail logging.
        mailer.sendConfirmationEmail(email, name, role);

        res.status(201).json({ message: 'Success! Interest confirmed, recorded, and email initiated.' });

    } catch (error) {
        console.error('Waitlist submission failed:', error);
        res.status(500).json({ message: 'Server error: Failed to record interest.' });
    }
});

// --- Start Server ---

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});