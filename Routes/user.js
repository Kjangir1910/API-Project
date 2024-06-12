const express = require('express')
const router = express.Router()
const User = require('../Models/user')


// Register User
router.post('/register' , async(req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).send(user)
    } catch (error){
        res.status(400).send(error)
    }
}
)

// Get User Data

router.get('/fetch', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).send(users) 
    } catch(error) {
        res.status(500).send(error)
    }
})

module.exports = router
