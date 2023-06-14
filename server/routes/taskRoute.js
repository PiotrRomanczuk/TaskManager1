const express = require('express');
const Task = require('../models/taskModel');
const router = express.Router();
const {
    createTask,
    getAllTasks,
    getTaskByID,
    updateTask,
    deleteTask
} = require('../controllers/taskController');



//  Create a Task
router.post('/api/tasks', createTask);
 
// Get/Read All Tasks
router.get('/api/tasks', getAllTasks)

// Get/Read one Tasks
router.get('/api/tasks:id', getTaskByID)

// Update a Task
router.put('/api/tasks:id', updateTask)

// Delete a Task
router.delete('/api/tasks:id', deleteTask)

module.exports = router;