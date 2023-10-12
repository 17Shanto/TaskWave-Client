const express = require("express");
const router = express.Router();
const workspaceController = require("../controllers/workspaceController");

// Create a new workspace
router.post("/workspaces", workspaceController.createWorkspace);

// Get all workspaces
router.get("/workspaces", workspaceController.getAllWorkspaces);

// Get a single workspace by ID
router.get("/workspaces/:id", workspaceController.getWorkspaceById);

// Update a workspace by ID
router.put("/workspaces/:id", workspaceController.updateWorkspace);

// Delete a workspace by ID
router.delete("/workspaces/:id", workspaceController.deleteWorkspace);

module.exports = router;
