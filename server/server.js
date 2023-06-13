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


// Routes

app.get('/', (req, res) => { 
    res.send("Home page") 
    console.log("Hello from the server")
})

