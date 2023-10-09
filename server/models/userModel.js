const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    workspaces: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Workspace",
        },
    ],
    lists: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "List",
        },
    ],
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task",
        },
    ],
});

// Create a User model
const User = mongoose.model("User", userSchema);

module.exports = User;