const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors')
// Import routes
const workspaceRoutes = require("./routes/workspaceRoutes");
const listRoutes = require("./routes/listRoutes");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

// Create an Express application
const app = express();

// Replace '<password>' with your actual MongoDB password
const mongoDBPassword = "3YC2Z*ZlWm6aiqqM$v";

// Construct the MongoDB connection URL
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
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())
// Use the routes
app.use("/api/users", userRoutes);
app.use("/api/workspaces", workspaceRoutes);
app.use("/api/lists", listRoutes);
app.use("/api/tasks", taskRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
