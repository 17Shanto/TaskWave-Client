const Workspace = require("../models/workspaceModel");

// Create a new workspace
exports.createWorkspace = async (req, res) => {
  try {
    const workspace = new Workspace(req.body);
    await workspace.save();
    res.status(201).json(workspace);
  } catch (error) {
    res.status(500).json({ error: "Could not create workspace" });
  }
};

// Get all workspaces
exports.getAllWorkspaces = async (req, res) => {
  try {
    const workspaces = await Workspace.find();
    res.status(200).json(workspaces);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch workspaces" });
  }
};

// Get a single workspace by ID
exports.getWorkspaceById = async (req, res) => {
  const { id } = req.params;
  try {
    const workspace = await Workspace.findById(id);
    if (!workspace) {
      return res.status(404).json({ error: "Workspace not found" });
    }
    res.status(200).json(workspace);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch the workspace" });
  }
};

// Update a workspace by ID
exports.updateWorkspace = async (req, res) => {
  const { id } = req.params;
  try {
    const workspace = await Workspace.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!workspace) {
      return res.status(404).json({ error: "Workspace not found" });
    }
    res.status(200).json(workspace);
  } catch (error) {
    res.status(500).json({ error: "Could not update the workspace" });
  }
};

// Delete a workspace by ID
exports.deleteWorkspace = async (req, res) => {
  const { id } = req.params;
  try {
    const workspace = await Workspace.findByIdAndRemove(id);
    if (!workspace) {
      return res.status(404).json({ error: "Workspace not found" });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: "Could not delete the workspace" });
  }
};
