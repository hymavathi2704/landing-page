// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); 

const waitlistModel = require('./waitlistModel'); // Import database logic
// REMOVED: const mailer = require('./mailer'); // Import email logic

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
        // 1. Create entry directly (Removed explicit email duplication check
        // to allow users to register for multiple roles with the same email.)

        const result = await waitlistModel.createEntry({ name, email, phone, role, notes });
        console.log(`New waitlist entry recorded for ID: ${result.insertId} with role: ${role}`);

        // 2. Send confirmation email (Mailer Logic)
        // REMOVED: mailer.sendConfirmationEmail(email, name, role);

        // Updated message to reflect email removal
        res.status(201).json({ message: 'Success! Interest confirmed and recorded.' });

    } catch (error) {
        console.error('Waitlist submission failed:', error);
        res.status(500).json({ message: 'Server error: Failed to record interest.' });
    }
});

// --- Start Server ---

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});