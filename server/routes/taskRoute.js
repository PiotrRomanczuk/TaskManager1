/** @format */

const express = require('express');
const Task = require('../models/taskModel');
const router = express.Router();
const {
	createTask,
	getAllTasks,
	getTaskByID,
	updateTask,
	deleteTask,
} = require('../controllers/taskController');

router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getTaskByID).put(updateTask).delete(deleteTask);

module.exports = router;
