/**
 * @module listModel
 */



const mongoose = require("mongoose");
const Workspace = require("../models/workspaceModel");


/**
 * Represents and defines a List in the application
 * @class
 */
const listSchema = new mongoose.Schema({


  /**
   * The title of the list.
   * @type {string}
   * @required
   * @trim
   */


  title: {
    type: String,
    required: true,
    trim: true,
  },


  /**
   * An array of tasks associated with the list
   * @type {Array.<mongoose.Schema.Types.ObjectId>}
   * @ref Task
   */



  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],

  /**
   * The workspace to which this list belongs
   * @type {mongoose.Schema.Types.ObjectId}
   * @required
   * @ref Workspace
   */


  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
    required: true,
  },
});

/**
 * Middleware function to update the associated workspace's 'lists' array when a list is saved
 * @function
 * @param {List} list - The saved list document.
 */

listSchema.post("save", async function (list) {
  try {

  /**
    *Find the associated workspace and push the list's ID to its 'lists' array
    */ 

    const workspace = await Workspace.findByIdAndUpdate(
      list.workspace,
      { $push: { lists: list._id } },
      { new: true }
    );
    if (!workspace) {
      throw new Error("Workspace not found");
    }
  } catch (error) {

  /**
    * Handle the error if needed, e.g., by sending an HTTP response
    * res.status(500).json({ message: error });
    */

    res.status(500).json({ message: error });
  }
});

/**
 * Create a List model
 * @type {mongoose.Model}
 */

const List = mongoose.model("List", listSchema);
module.exports = List;
