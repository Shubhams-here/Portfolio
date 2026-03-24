const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const Message = require('./models/Message');

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

        const newMessage = new Message({ name, email, subject, message });
        await newMessage.save();

        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Contact Error:', error);
        res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
});

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_shubham';
mongoose.connect(mongoURI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});
