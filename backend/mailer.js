// mailer.js
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

// --- Email Configuration (Nodemailer) ---

// Create a transporter using Gmail SMTP settings
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD 
    }
});

/**
 * Sends a confirmation email to a new waitlist member.
 * @param {string} recipientEmail - The email address to send the confirmation to.
 * @param {string} recipientName - The name of the recipient.
 * @param {string} role - The role they selected ('coach' or 'client').
 */
const sendConfirmationEmail = async (recipientEmail, recipientName, role) => {
    // Customize email content for a friendly and useful confirmation
    const subject = "Welcome to Equibudx! Your Interest is Confirmed.";
    
    // Slight customization based on role
    const roleSpecificText = role === 'coach' 
        ? "Thank you for showing interest in joining Equibudx as a Coach! We value your expertise and will be in touch with updates on our fair commission structure and launch timeline."
        : "Thank you for showing interest in Equibudx! We're excited to have you join our community and will send you regular updates as we prepare for launch.";

    const mailOptions = {
        from: `Equibudx <${process.env.EMAIL_SENDER_ADDRESS}>`,
        to: recipientEmail,
        subject: subject,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1A1A1A;">
                <h2 style="color: #1D4ED8;">Interest Confirmed, ${recipientName}!</h2>
                <p>${roleSpecificText}</p>
                <p><strong>What Happens Next?</strong></p>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 8px;">✔️ <strong>Confirmation Email:</strong> You're reading it!</li>
                    <li style="margin-bottom: 8px;">🗓️ <strong>Launch Updates:</strong> We will send you updates on our progress and the official launch date.</li>
                    <li style="margin-bottom: 8px;">🚀 <strong>Future Access:</strong> You will be notified when the platform is ready for users.</li>
                </ul>
                <p>We are building the balanced coaching platform and appreciate your early support.</p>
                <p>Best regards,<br>The Equibudx Team</p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Confirmation email sent successfully to ${recipientEmail}`);
    } catch (error) {
        // Log the failure, but don't re-throw, so the HTTP response isn't blocked.
        console.error(`Failed to send email to ${recipientEmail}:`, error);
    }
};

module.exports = {
    sendConfirmationEmail
};