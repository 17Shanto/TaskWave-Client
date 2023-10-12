const express = require("express");
const router = express.Router({ mergeParams: true });
const taskController = require("../controllers/taskController");

// Create a new task within a list
router.post("/tasks", taskController.createTask);

// Get all tasks within a list
router.get("/tasks", taskController.getAllTasks);

// Get a single task by ID
router.get("/tasks/:id", taskController.getTaskById);

// Update a task by ID
router.put("/tasks/:id", taskController.updateTask);

// Delete a task by ID
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
