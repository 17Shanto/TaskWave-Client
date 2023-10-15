const List = require("../models/listModel");

// Create a new list within a workspace
exports.createList = async (req, res) => {
  try {
    const list = new List(req.body);
    await list.save();
    res.status(201).json(list);
  } catch (error) {
    res.status(500).json({ error: "Could not create list" });
  }
};

// Get all lists within a workspace
exports.getAllLists = async (req, res) => {
  const { workspaceId } = req.params;
  try {
    const lists = await List.find({ workspace: workspaceId });
    res.status(200).json(lists);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch lists" });
  }
};

// Get a single list by ID
exports.getListById = async (req, res) => {
  const { id } = req.params;
  try {
    const list = await List.findById(id);
    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch the list" });
  }
};

// Update a list by ID
exports.updateList = async (req, res) => {
  const { id } = req.params;
  try {
    const list = await List.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: "Could not update the list" });
  }
};

// Delete a list by ID
exports.deleteList = async (req, res) => {
  const { id } = req.params;
  try {
    const list = await List.findByIdAndRemove(id);
    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: "Could not delete the list" });
  }
};