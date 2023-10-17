const express = require("express");
const router = express.Router({ mergeParams: true });
const listController = require("../controllers/listController");

// Create a new list within a workspace
router.post("/", listController.createList);

// Get all lists within a workspace
router.get("/", listController.getAllLists);

// Get a single list by ID
router.get("/:id", listController.getListById);

// Update a list by ID
router.put("/:id", listController.updateList);

// Delete a list by ID
router.delete("/:id", listController.deleteList);

module.exports = router;
