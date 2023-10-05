const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define the schema for the User model here
  // You can add fields like name, email, etc.
});

const workspaceSchema = new mongoose.Schema({
  workspaceID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectmanager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  teamMembers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  }],
});

const Workspace = mongoose.model('Workspace', workspaceSchema);

module.exports = Workspace;