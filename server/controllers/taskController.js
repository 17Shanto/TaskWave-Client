const Task = require("../models/taskModel");
const List = require("../models/listModel");

// Create a new task within a list
exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Could not create task", error: error });
  }
};

// Get all tasks within a list
exports.getAllTasks = async (req, res) => {
  const { listId } = req.params;
  try {
    const tasks = await Task.find({ list: listId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch tasks", error: error });
  }
};

// Get a single task by ID
exports.getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found", error: error });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch the task" });
  }
};

// Update a task by ID
// Update a task by ID
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { list: newListId, ...updateData } = req.body; // Extract the new list ID and other update data

  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    const oldListId = task.list; // Get the old list ID

    // Check if the list ID is being changed
    if (oldListId !== newListId) {
      // Remove the task from the old list
      const oldList = await List.findById(oldListId);
      if (oldList) {
        oldList.tasks.pull(task._id);
        await oldList.save();
      }

      // Add the task to the new list
      const newList = await List.findById(newListId);
      if (newList) {
        newList.tasks.push(task._id);
        await newList.save();
      }
    }

    // Update the task with the provided data
    const updatedTask = await Task.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedTask) {
      console.log("Error updating the task - updatedTask is null.");
      return res.status(404).json({ error: "Task not found or update failed" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res
      .status(500)
      .json({ message: "Could not update the task", error: error });
  }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndRemove(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(204).json();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not delete the task", error: error });
  }
};
