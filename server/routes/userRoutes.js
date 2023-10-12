const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Register a new user
router.post("/register", userController.registerUser);

// Login user
router.post("/login", userController.loginUser);

// Logout user (optional)
router.post("/logout", userController.logoutUser);

// Get user profile (requires authentication)
router.get("/profile", userController.getUserProfile);

module.exports = router;
