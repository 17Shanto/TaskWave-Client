const Workspace = require("../models/workspaceModel");

/**
 * Creates a new workspace.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
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
/**
 * Gets all workspaces.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
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
/**
 * Gets a single workspace by its ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */

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
/**
 * Updates a workspace by its ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
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

/**
 * Deletes a workspace by its ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
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

/**
 * Gets all lists and tasks populated of a specific workspace by its ID.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */exports.getListsAndTasksByWorkspaceId = async (req, res) => {
  try {
    const workspaceId = req.params.id;

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
