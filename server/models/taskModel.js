const mongoose = require("mongoose");
const List = require("../models/listModel");

// Define the Task schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
    required: true,
  },
  dueDate: {
    type: Date,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Define a post-save middleware for the Task model
taskSchema.post("save", async function (task) {
  try {
    // Find the associated list and push the task's ID to its 'tasks' array
    const list = await List.findByIdAndUpdate(
      task.list,
      { $push: { tasks: task._id } },
      { new: true }
    );
    if (!list) {
      throw new Error("List not found");
    }
  } catch (error) {
    // Handle the error if needed
    console.error("Error updating list tasks:", error);
  }
});

// Create a Task model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
