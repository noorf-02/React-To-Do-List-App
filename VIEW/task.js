const express = require('express');
const { getTasks, createTask, getTask, deleteTask,editTask } = require('../CONTROLLER/task');
const router = express.Router();

router.get('/getTask', getTasks);
router.post('/createTask', createTask);
router.get('/getTask/:id', getTask);
router.delete('/getTask/:id', deleteTask);
router.patch('/getTask/:id', editTask);

module.exports = router;