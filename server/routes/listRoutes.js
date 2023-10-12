const express = require("express");
const router = express.Router({ mergeParams: true });
const listController = require("../controllers/listController");

// Create a new list within a workspace
router.post("/lists", listController.createList);

// Get all lists within a workspace
router.get("/lists", listController.getAllLists);

// Get a single list by ID
router.get("/lists/:id", listController.getListById);

// Update a list by ID
router.put("/lists/:id", listController.updateList);

// Delete a list by ID
router.delete("/lists/:id", listController.deleteList);

module.exports = router;
