const express = require('express');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8080;

const Task = require('./model/taskModel');

const taskRoutes = require('./routes/taskRoute');



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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(taskRoutes)

// const logger = (req, res, next) => { 
//     console.log("Middleware running")
//     console.log(req.method)
//     next()
// }

// Routes
app.get('/', (req, res) => { 
    res.send("Home page") 
    console.log("Hello from the server")
})



