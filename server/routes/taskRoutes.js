const express = require("express");
const router = express.Router({ mergeParams: true });
const taskController = require("../controllers/taskController");
const { requireAuth } = require("../middlewares/authMiddleware");

// Create a new task within a list
router.post("/", requireAuth, taskController.createTask);

// Get all tasks within a list
router.get("/", requireAuth, taskController.getAllTasks);

// Get a single task by ID
router.get("/:id", requireAuth, taskController.getTaskById);

// Update a task by ID
router.put("/:id", requireAuth, taskController.updateTask);

// Delete a task by ID
router.delete("/:id", requireAuth, taskController.deleteTask);

module.exports = router;
