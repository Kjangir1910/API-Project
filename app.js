const express = require('express')
const mongoose = require ('mongoose')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

// MongoDB connection

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("MongoDb Connected")
    })
    .catch(err => {
        console.log(err);
    }
)

// Routes 
const userRoute = require('./Routes/user')
app.use('/api/users', userRoute)


// Server static file of HTML

app.use(express.static('views'))


// Server

const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})