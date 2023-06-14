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
        
        if (!task) {
            res.status(404).json(`No tasks found`)
        } else {
            res.status(200).json(task)
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
   
        if (!task) {
            res.status(404).json(`No task found with ID: ${id}`)
        } else {
            res.status(200).json(`Task found with ID: ${id}`)
        }
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id : id},
            req.body,
            { new: true })

        if (!task) {
            res.status(500).json(`No task found with ID: ${id}`)
        } else {
            res.status(200).json(`Task updated successfully with ID: ${id}`)
        }
}
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
 }

const deleteTask = async (req, res) => {
    try {
            const { id } = req.params;
            const task = await Task.findByIdAndDelete(id)
        
        if (!task) {
            res.status(404).json(`No task found with ID: ${id}`)
        } else {
            res.status(200).json(`Task deleted successfully with ID: ${id}`)
        }
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