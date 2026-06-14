const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Handle uncaught exceptions and unhandled promise rejections early
process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION! Shutting down...');
    console.error(err.name, err.message, err.stack);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    console.error('UNHANDLED REJECTION! Shutting down...');
    console.error(err.name, err.message, err.stack);
    process.exit(1);
});

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration to allow local development and Vercel production
const allowedOrigins = [
    'https://shubhambuilds.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5000'
];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        const isAllowed = allowedOrigins.includes(origin) || 
                          origin.startsWith('http://localhost:') || 
                          origin.startsWith('http://127.0.0.1:');
                          
        if (isAllowed) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use(express.json());

// const Message = require('./models/Message');

// Configure Resend API Transporter (using native fetch, no installation required)

// Default route
app.get('/', (req, res) => {
    res.send('MERN Portfolio API is running');
});

// Contact Route
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, message: 'Please fill in all fields' });
        }

        // const newMessage = new Message({ name, email, subject, message });
        // await newMessage.save();

        // Send Email notification via Resend API (HTTP, bypasses Render SMTP port blocks)
        if (process.env.RESEND_API_KEY) {
            const emailData = {
                from: 'Portfolio Contact <onboarding@resend.dev>',
                to: process.env.EMAIL_RECEIVER || 'shubhamsinghrajput7809@gmail.com',
                subject: `Portfolio Contact: ${subject}`,
                text: `You have received a new message from your portfolio contact form.\n\n` +
                      `Name: ${name}\n` +
                      `Email: ${email}\n` +
                      `Subject: ${subject}\n\n` +
                      `Message:\n${message}`
            };

            fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
                },
                body: JSON.stringify(emailData)
            })
            .then(async (resendRes) => {
                if (!resendRes.ok) {
                    const errText = await resendRes.text();
                    console.error('Resend API Error:', errText);
                } else {
                    const resData = await resendRes.json();
                    console.log('Email sent successfully via Resend:', resData.id);
                }
            })
            .catch((fetchErr) => {
                console.error('Fetch error calling Resend API:', fetchErr);
            });
        } else {
            console.warn('Resend is not configured (RESEND_API_KEY missing). Skipping email send.');
        }

        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Contact Error:', error);
        res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Unhandled Server Error:', err);
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: process.env.NODE_ENV === 'production' 
            ? 'Internal Server Error' 
            : err.message
    });
});

// Helper function to sanitize MongoDB URI for logging
// function sanitizeMongoUri(uri) {
//     if (!uri) return '';
//     return uri.replace(/:([^:@]+)@/, ':******@');
// }

// Connect to MongoDB
// const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_shubham';
//
// console.log(`Connecting to MongoDB at: ${sanitizeMongoUri(mongoURI)}`);
//
// mongoose.connect(mongoURI)
// .then(() => {
//     console.log('Connected to MongoDB successfully');
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// })
// .catch((err) => {
//     console.error('Failed to connect to MongoDB:', err.message);
//     process.exit(1);
// });

// Start Express server directly
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
