// Import necessary modules
const mongoose = require("mongoose");
const Workspace = require("../models/workspaceModel");
const List = require("../models/listModel");
const Task = require("../models/taskModel");
const User = require("../models/userModel");

// Replace this with your MongoDB connection URL
const mongoDBURL = `mongodb+srv://root:${encodeURIComponent(
  "3YC2Z*ZlWm6aiqqM$v"
)}@taskwavecluster.mgnpo9w.mongodb.net/taskwave-db?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose
  .connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    createDummyData();
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Function to generate dummy data
async function createDummyData() {
  try {
    // Create a dummy user
    const user = new User({
      name: "Dummy User",
      email: "dummy@example.com",
      password: "dummyPassword",
    });
    await user.save();

    // Create a dummy workspace
    const workspace = new Workspace({
      name: "Sample Workspace",
      createdBy: user._id,
    });
    await workspace.save();

    // Create lists and tasks with meaningful names
    const listsAndTasks = [
      {
        listName: "Todo",
        taskNames: [
          "Write project proposal",
          "Plan project scope",
          "Create wireframes",
        ],
      },
      {
        listName: "Doing",
        taskNames: [
          "Design user interface",
          "Implement backend",
          "Test application",
        ],
      },
      {
        listName: "Backlog",
        taskNames: [
          "Review and document code",
          "Prepare project presentation",
          "Deploy application",
        ],
      },
    ];

    for (const listAndTasks of listsAndTasks) {
      const list = new List({
        title: listAndTasks.listName,
        workspace: workspace._id,
      });
      await list.save();

      for (const taskName of listAndTasks.taskNames) {
        const task = new Task({
          title: taskName,
          list: list._id,
        });
        await task.save();
      }
    }

    console.log("Dummy data created successfully");

    // Close the MongoDB connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error creating dummy data:", error);
  }
}
