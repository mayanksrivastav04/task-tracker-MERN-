const taskModel = require("../models/task.model");

const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      status = "pending",
      priority = "medium",
    } = req.body;

    const task = await taskModel.create({
      title,
      description,
      status,
      priority,
    });

    res.status(201).json({
      message: "task created successfully",
      task: task,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({
      message: err.message,
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find().sort({ createdAt: -1 }); //newest task first

    res.status(200).json({
      message: "tasks fetched successfully",
      tasks: tasks,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
    });
  }
};

const getOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findById(id);

    if (!task) {
      return res.status(404).json({
        message: "task not found",
      });
    }

    res.status(200).json({
      message: "task fetched",
      task: task,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, priority } = req.body;

    const task = await taskModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        status,
        priority,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }

    res.status(200).json({
      message: "task updated successfully",
      task: task,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({
        message: "task not found",
      });
    }

    res.status(200).json({
      message: "task deleted successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { createTask, getTasks, getOneTask, updateTask, deleteTask };
