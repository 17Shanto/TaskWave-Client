const express = require("express");
const router = express.Router({ mergeParams: true });
const taskController = require("../controllers/taskController");

// Create a new task within a list
router.post("/", taskController.createTask);

// Get all tasks within a list
router.get("/", taskController.getAllTasks);

// Get a single task by ID
router.get("/:id", taskController.getTaskById);

// Update a task by ID
router.put("/:id", taskController.updateTask);

// Delete a task by ID
router.delete("/:id", taskController.deleteTask);

module.exports = router;
