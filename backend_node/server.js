const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/fitnessTracker')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Middleware
app.use(cors());
app.use(express.json());


// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5002; // Changed port to 5002
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

