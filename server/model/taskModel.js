const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    // description: {
    //     type: String,
    //     required: false
    // },
},
{
    timestamp: true
})


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;