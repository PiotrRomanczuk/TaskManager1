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

// //  Create a Task
// router.post('/', createTask);

// // Get/Read All Tasks
// router.get('/', getAllTasks);

// // Get/Read one Tasks
// router.get('/:id', getTaskByID);

// // Update a Task
// router.put('/:id', updateTask);

// // Delete a Task
// router.delete('/:id', deleteTask);

module.exports = router;
