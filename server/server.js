const express = require('express');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8080;

const Task = require('./models/taskModel');
const taskRoute = require('./routes/taskRoute');

// Starting the server AFTER the connection with the database

const startServer = async () => {
	try {
		await connectDB();
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	} catch (err) {
		console.log(err);
	}
};
startServer();

// Midlleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/tasks', taskRoute);

// Routes
app.get('/', (req, res) => {
	res.send('Home page');
	console.log('Hello from the server');
});

module.exports = { app };
