const express = require('express');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => { 
    res.send("Home page") 
    console.log("Hello from the server")
})

connectDB()

app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`)
})

// mongodb+srv://promanczuk: 1234@taskmanager.9ufphzl.mongodb.net /? retryWrites = true & w=majority;
