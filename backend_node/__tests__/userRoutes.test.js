const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const userRoutes = require('../routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

describe('User Routes', () => {
    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/fitnessTrackerTest');
    }, 30000); // Increase timeout to 30 seconds

    afterAll(async () => {
        await mongoose.connection.close();
    }, 30000); // Increase timeout to 30 seconds

    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({
                username: 'testuser',
                password: 'testpassword'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    }, 30000); // Increase timeout to 30 seconds

    it('should get all users', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    }, 30000); // Increase timeout to 30 seconds
});

