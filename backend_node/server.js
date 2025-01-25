const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fitnessTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const express = require('express');
const app = express();

app.use(express.json());

const userRoutes = require('./routes/userRoutes');

app.use('/api', userRoutes);

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);


// Your routes here

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

