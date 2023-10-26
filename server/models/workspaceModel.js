const mongoose = require("mongoose");

// Define the Workspace schema
const workspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  lists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
});

// Create a Workspace model
const Workspace = mongoose.model("Workspace", workspaceSchema);

module.exports = Workspace;
