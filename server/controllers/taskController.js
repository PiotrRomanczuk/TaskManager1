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
        const task = await Task.find()
        res.status(200).json(tasks)

        if (!task) { 
            res.status(404).json(`No tasks found with ID: ${id}`)
        }
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
} 

const getTaskByID = async (req, res) => { 
    try {
        
        const { id } = req.params;
        const task = await Task.findById(id)
   
        res.status(200).json(task)
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(task)
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
 }

const deleteTask = async (req, res) => {
    try {
            const { id } = req.params;
            const task = await Task.findByIdAndDelete(id)
            res.status(200).json(task)
        }
        catch (err) {
            res.status(500).json({ msg: err.message })
        }
 }


module.exports = {
    createTask,
    getAllTasks,
    getTaskByID,
    updateTask,
    deleteTask
};