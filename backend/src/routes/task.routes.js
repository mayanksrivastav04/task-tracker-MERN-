const express = require("express");
const router = express.Router();
const taskModel = require("../models/task.model");
const taskController = require('../controllers/task.controller')


//create task
router.post("/",taskController.createTask);

//get All task
router.get("/",taskController.getTasks);

//get one task
router.get("/:id",taskController.getOneTask);

//update task
router.put("/:id",taskController.updateTask)

//delete task
router.delete("/:id",taskController.deleteTask);













module.exports = router;