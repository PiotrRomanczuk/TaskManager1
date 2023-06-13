const express = require('express');
const Task = require('../model/taskModel');
const {createTask, getAllTasks} = require('../controllers/taskController');
const router = express.Router();



//  Create a Task
router.post('/api/tasks', createTask);
 
// Get/Read Tasks
router.get('/api/tasks', getAllTasks)

module.exports = router;