const  express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const Exercise = require('./models/Exercise');
const app = express();

mongoose.connect('mongodb://localhost:27017/fitnessTracker', { userNewurlParser: true, useUnifieldTopology: true });

app.use(express.json());

// Route for user registration
app.post('/register', async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = new User({ username, password });
		await user.save();
		res.status(201).send('Úser registered');
	}     catch (error) {
		res.status(400).send('Error registering user');
	}
});

// Route for logging exercises
app.post('/exercises', async (req, res) => {
	const { userId, type, duration } = req.body;
	try {
		const exercise = new Exercise({ user: userId, type, duration });
		await exercise.save();
		res.status(201).send('Exercise logged');
	}     catch (error) {
		res.status(400).send('Error logging exercise');
	}
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});

