const mongoose = require("mongoose");
/**
 * Represents and defines a Workspace in the application.
 * @class
 */
const workspaceSchema = new mongoose.Schema({

    /**
   * The name of the workspace.
   * @type {string}
   * @required
   * @trim
   */

  name: {
    type: String,
    required: true,
    trim: true,
  },

  /**
   * The description of the workspace.
   * @type {string}
   * @trim
   */

  description: {
    type: String,
    trim: true,
  },
   /**
   * An array of lists associated with the workspace.
   * @type {Array.<mongoose.Schema.Types.ObjectId>}
   * @ref List
   */

  lists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
    /**
   * The user who created the workspace.
   * @type {mongoose.Schema.Types.ObjectId}
   * @required
   * @ref User - Reference to the User model.
   */
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", /** Reference to the User model*/
    required: true,
  },
});


/**
 * Represents the Workspace model for managing workspaces in the application.
 * @type {mongoose.Model}
 */const Workspace = mongoose.model("Workspace", workspaceSchema);

module.exports = Workspace;
