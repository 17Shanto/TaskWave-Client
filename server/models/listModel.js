const mongoose = require("mongoose");
const Workspace = require("../models/workspaceModel");

// Define the List schema
const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
    required: true,
  },
});

// Define a post-save middleware that updates the workspace's 'lists' array
listSchema.post("save", async function (list) {
  try {
    // Find the associated workspace and push the list's ID to its 'lists' array
    const workspace = await Workspace.findByIdAndUpdate(
      list.workspace,
      { $push: { lists: list._id } },
      { new: true }
    );
    if (!workspace) {
      throw new Error("Workspace not found");
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// Create a List model
const List = mongoose.model("List", listSchema);
module.exports = List;
