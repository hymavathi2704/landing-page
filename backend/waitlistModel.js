// waitlistModel.js (Finalized for specific credentials)
const mysql = require('mysql2/promise');
require('dotenv').config();

// --- MySQL Connection Pool Configuration ---
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // <-- Reads the port you provided
    user: process.env.DB_USER,
    // Safely uses the empty password provided
    password: process.env.DB_PASSWORD || '', 
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

/**
 * Inserts a new waitlist entry into the database.
 * @param {object} data - Contains name, email, phone, role, and notes.
 * @returns {object} The result of the database operation.
 */
const createEntry = async (data) => {
    const { name, email, phone, role, notes } = data;

    const sql = `
        INSERT INTO waitlist_entries (name, email, phone, role, notes, created_at)
        VALUES (?, ?, ?, ?, ?, NOW())
    `;
    
    // Set phone and notes to null if they are empty strings
    const values = [name, email, phone || null, role, notes || null];

    const [result] = await pool.execute(sql, values);
    return result;
};

/**
 * Checks if a waitlist entry with the given email already exists.
 * @param {string} email - The email to search for.
 * @returns {object|null} The row object if found, otherwise null.
 */
const findByEmail = async (email) => {
    const sql = 'SELECT id, email FROM waitlist_entries WHERE email = ? LIMIT 1';
    const [rows] = await pool.execute(sql, [email]);
    return rows[0];
};

module.exports = {
    createEntry,
    findByEmail,
};