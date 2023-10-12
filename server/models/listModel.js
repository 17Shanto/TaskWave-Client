const mongoose = require("mongoose"); // Define the List schema
const listSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
    required: true,
  },
}); // Create a List model
const List = mongoose.model("List", listSchema);
module.exports = List;
