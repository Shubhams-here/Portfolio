const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
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

// CORS configuration for development and production
const allowedOrigins = [
    'https://shubhambuilds.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5000'
];

if (process.env.FRONTEND_URL) {
    allowedOrigins.push(process.env.FRONTEND_URL);
}

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

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

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

        // Send Email notification
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_RECEIVER || 'shubhamsinghrajput7809@gmail.com',
                subject: `Portfolio Contact: ${subject}`,
                text: `You have received a new message from your portfolio contact form.\n\n` +
                      `Name: ${name}\n` +
                      `Email: ${email}\n` +
                      `Subject: ${subject}\n\n` +
                      `Message:\n${message}`
            };

            transporter.sendMail(mailOptions, (mailErr, info) => {
                if (mailErr) {
                    console.error('Nodemailer Error:', mailErr);
                } else {
                    console.log('Email sent successfully:', info.response);
                }
            });
        } else {
            console.warn('Nodemailer is not configured (EMAIL_USER/EMAIL_PASS missing). Skipping email send.');
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
