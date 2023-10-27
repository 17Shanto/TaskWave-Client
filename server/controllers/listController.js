const List = require("../models/listModel");

/**
 * Create a new list within a workspace.
 * @function
 * @async
 * @param {express.Request} req - The Express request object.
 * @param {express.Response} res - The Express response object.
 */


exports.createList = async (req, res) => {
  try {
    const list = new List(req.body);
    await list.save();
    res.status(201).json(list);
  } catch (error) {
    res.status(500).json({ message: "Could not create list", error: error });
  }
};

/**
 * Get all lists within a workspace.
 * @function
 * @async
 * @param {express.Request} req - The Express request object.
 * @param {express.Response} res - The Express response object.
 */

exports.getAllLists = async (req, res) => {
  const { workspaceId } = req.params;
  try {
    const lists = await List.find({ workspace: workspaceId });
    res.status(200).json(lists);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch lists", error: error });
  }
};

/**
 * Get a single list by ID.
 * @function
 * @async
 * @param {express.Request} req - The Express request object.
 * @param {express.Response} res - The Express response object.
 */

exports.getListById = async (req, res) => {
  const { id } = req.params;
  try {
    const list = await List.findById(id);
    if (!list) {
      return res.status(404).json({ message: "List not found", error: error });
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch the list" });
  }
};

/**
 * Update a list by ID.
 * @function
 * @async
 * @param {express.Request} req - The Express request object.
 * @param {express.Response} res - The Express response object.
 */


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
    res
      .status(500)
      .json({ message: "Could not update the list", error: error });
  }
};

/**
 * Delete a list by ID.
 * @function
 * @async
 * @param {express.Request} req - The Express request object.
 * @param {express.Response} res - The Express response object.
 */


exports.deleteList = async (req, res) => {
  const { id } = req.params;
  try {
    const list = await List.findByIdAndRemove(id);
    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }
    res.status(204).json();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not delete the list", error: error });
  }
};
