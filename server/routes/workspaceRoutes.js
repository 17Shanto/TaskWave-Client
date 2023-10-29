const express = require("express");
const router = express.Router();
const workspaceController = require("../controllers/workspaceController");
const { requireAuth } = require("../middlewares/authMiddleware");
const {
  checkCreatorMiddleware,
} = require("../middlewares/checkCreatorMiddleware");
/**
 * Create a new workspace
 */

router.post("/", requireAuth, workspaceController.createWorkspace);
/**
 * Get all workspaces
 */

router.get("/", requireAuth, workspaceController.getAllWorkspaces);
/**
 * Get a single workspace by ID
 */

router.get("/:id", requireAuth, workspaceController.getWorkspaceById);
/**
 * Update a workspace by ID
 */

router.put("/:id", requireAuth, workspaceController.updateWorkspace);
/**
 * Delete a workspace by ID
 */

router.delete("/:id", requireAuth, workspaceController.deleteWorkspace);
/**
 * Get tasks for a specific list by its ID
 */

router.get(
  "/:id/lists",
  /**
 * requireAuth
 * checkCreatorMiddleware
 */

  workspaceController.getListsAndTasksByWorkspaceId
);

module.exports = router;
