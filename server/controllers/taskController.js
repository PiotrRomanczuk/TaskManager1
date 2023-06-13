const Task = require('../models/taskModel');

const createTask = async (req, res) => { 
    try {
        const task = await Task.create(req.body);
        // const savedTask = await task.save();
        res.status(200).json(task);
    } catch (err) {
        res.status(400).json(err);
    }
}

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
} 

const getTaskByID = async (req, res) => { 
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).json(task)
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskByID
};