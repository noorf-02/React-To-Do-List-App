const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema ({
    writeTask:String
});

const task = mongoose.model('task', taskSchema);
module.exports = task;