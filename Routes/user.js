const express = require('express');
const router = express.Router();
const User = require('../Models/user');

// Register User
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.keys(error.errors).map(key => ({
                field: key,
                message: error.errors[key].message
            }));
            res.status(400).send({ errors });
        } else {
            res.status(400).send({ message: 'An error occurred', error });
        }
    }
});

// Get User Data
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: 'An error occurred', error });
    }
});

module.exports = router;
