const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
    description: {
      type: String,
      maxLength: 200,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
  },
  { timestamps: true },  //stroing createdAt and updatedAt
);

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel;
