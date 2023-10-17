const express = require("express");
const router = express.Router();
const workspaceController = require("../controllers/workspaceController");

// Create a new workspace
router.post("/", workspaceController.createWorkspace);

// Get all workspaces
router.get("/", workspaceController.getAllWorkspaces);

// Get a single workspace by ID
router.get("/:id", workspaceController.getWorkspaceById);

// Update a workspace by ID
router.put("/:id", workspaceController.updateWorkspace);

// Delete a workspace by ID
router.delete("/:id", workspaceController.deleteWorkspace);

module.exports = router;
