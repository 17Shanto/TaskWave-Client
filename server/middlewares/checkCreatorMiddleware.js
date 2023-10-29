const Workspace = require("../models/workspaceModel");
const { requireAuth } = require("./authMiddleware");

/**
 * Middleware to check if the user is the creator of the workspace.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @throws {Error} If there is an internal server error.
 */

const checkCreatorMiddleware = async (req, res, next) => {
  try {
    const workspaceId = req.params.id; /**  
    Assuming the workspace ID is in the request parameters
    */
    const userId = req.user.id; /** 

    *Assuming you have stored the user's ID in req.user
    */

    /**
     * Find the workspace by its ID
     */
    const workspace = await Workspace.findById(workspaceId);

    if (!workspace) {
      return res.status(404).json({ message: "Workspace not found" });
    }

    /** 
     * Check if the logged-in user is the creator of the workspace
    */

    if (workspace.createdBy.toString() !== userId) {
      return res
        .status(403)
        .json({ message: "This user is not the creator of this workspace" });
    }

    /**
     *If the user is the creator, allow the request to continue
    */ 
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error", error: err });
  }
};

module.exports = { checkCreatorMiddleware };
