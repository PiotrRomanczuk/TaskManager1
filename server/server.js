const express = require('express');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;

// Starting the server AFTER the connection with the database

const startServer = async () => { 
    try {
        await connectDB();  
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}

startServer();

// Midlleware

const logger = (req, res, next) => { 
    console.log("Middlware running")
    next()
}

// Routes

app.get('/', (req, res) => { 
    res.send("Home page") 
    console.log("Hello from the server")
})

//  Create a Task

app.post('/api/tasks', logger, async (req, res) => {

    console.log(req.body)
    res.send("Task created")

 })
