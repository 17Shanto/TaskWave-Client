const express = require("express");
const router = express.Router({ mergeParams: true });
const listController = require("../controllers/listController");
const { requireAuth } = require("../middlewares/authMiddleware");

/**
 * Create a new list within a workspace
 */
router.post("/", requireAuth, listController.createList);

/**
 *Get all lists within a workspace  
 */ 
router.get("/", requireAuth, listController.getAllLists);

/**
 *Get a single list by ID  
 */ 
router.get("/:id", requireAuth, listController.getListById);

/**
 *Update a list by ID  
 */ 
router.put("/:id", requireAuth, listController.updateList);

/**
 *Delete a list by ID  
 */ 
router.delete("/:id", requireAuth, listController.deleteList);

module.exports = router;
