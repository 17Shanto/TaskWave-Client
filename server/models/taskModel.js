const mongoose = require("mongoose");
const List = require("../models/listModel");

/**
 * Represents and defines a Task in the application.
 * @class
 */
const taskSchema = new mongoose.Schema({

  /**
   * The title of the task.
   * @type {string}
   * @required
   * @trim
   */
  title: {
    type: String,
    required: true,
    trim: true,
  },

  /**
   * The description of the task.
   * @type {string}
   * @trim
   */
  description: {
    type: String,
    trim: true,
  },

  /**
   * The list to which this task belongs.
   * @type {mongoose.Schema.Types.ObjectId}
   * @required
   * @ref List
   */
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
    required: true,
  },

  /**
   * The due date for the task.
   * @type {Date}
   */
  dueDate: {
    type: Date,
  },

  /**
   * The priority of the task.
   * @type {string}
   * @enum {("Low"|"Medium"|"High")}
   * @default "Medium"
   */
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },

  /**
   * Indicates whether the task is completed.
   * @type {boolean}
   * @default false
   */
  completed: {
    type: Boolean,
    default: false,
  },
});

/**
 * Define a post-save middleware for the Task model
 *
 * @param {string} event - The event triggering the middleware (e.g., "save").
 * @param {Function} callback - The callback function to be executed when the event occurs.
 * @return {Promise<void>}
 */
taskSchema.post("save", async function (task) {
  try {
    /**
     * Find the associated list and push the task's ID to its 'tasks' array
     *
     * @param {string} task.list - The ID of the list associated with the task.
     * @param {Object} { $push: { tasks: task._id } } - The update operation to push the task's ID to the list's 'tasks' array.
     * @param {Object} { new: true } - Options to return the updated document after the operation.
     * @return {Promise<object>} - A promise that resolves with the updated list.
     */
    const list = await List.findByIdAndUpdate(
      task.list,
      { $push: { tasks: task._id } },
      { new: true }
    );
    if (!list) {
       /**
     * Handle the error if needed
     *
     * @param {Error} error - The error that occurred during the middleware               execution.
     */
      throw new Error("List not found");
    }
  } catch (error) {
    // Handle the error if needed
    console.error("Error updating list tasks:", error);
  }
});

/**
 * Create a Task model
 * @type {mongoose.Model}
 */
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
