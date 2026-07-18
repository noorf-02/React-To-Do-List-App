const express = require('express');
const { getTasks, createTask } = require('../CONTROLLER/task');
const router = express.Router();

router.get('/getTask', getTasks);
router.post('/createTask', createTask);

module.exports = router;