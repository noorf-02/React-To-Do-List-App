const mongoose = require('mongoose');
const task = require('../MODEL/task');

const createTask = async (req,res)=>{
    const { writeTask } = req.body;
    const createdTask = await task.create({writeTask:writeTask});
    res.send(createdTask);
}

const getTasks = async (req,res)=>{
    const data = await task.find([]);
    res.send(data);
}

module.exports = { createTask, getTasks };