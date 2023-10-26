const Workspace = require("../models/workspaceModel");

// Create a new workspace
exports.createWorkspace = async (req, res) => {
  try {
    const workspace = new Workspace(req.body);
    await workspace.save();
    res.status(201).json(workspace);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not create workspace", error: error });
  }
};

// Get all workspaces
exports.getAllWorkspaces = async (req, res) => {
  try {
    const workspaces = await Workspace.find();
    res.status(200).json(workspaces);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not fetch workspaces", error: error });
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
    res
      .status(500)
      .json({ message: "Could not fetch the workspace", error: error });
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
    res
      .status(500)
      .json({ message: "Could not update the workspace", error: error });
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
    res
      .status(500)
      .json({ message: "Could not delete the workspace", error: error });
  }
};

// Controller function to get all lists and tasks populated of a specific workspace by its ID
exports.getListsAndTasksByWorkspaceId = async (req, res) => {
  try {
    const workspaceId = req.params.id;

    // Find the workspace by its ID
    const workspace = await Workspace.findById(workspaceId).populate({
      path: "lists",
      select: "title",
      populate: {
        path: "tasks",
        select: "title description priority completed",
      },
    });

    if (!workspace) {
      return res.status(404).json({ message: "Workspace not found" });
    }

    res.status(200).json({ data: { workspace } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
