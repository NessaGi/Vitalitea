const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const itemActions = require("./controllers/itemActions");
const userActions = require("./controllers/userActions");

// Route to get a list of users
router.get("/users", userActions.browse);

// Route to get a specific item by ID
router.get("/users/:id", itemActions.read);

// Route to add a new item
router.post("/users", userActions.create);

router.delete("/users/:id", userActions.destroy);

// Route to update a user by ID
router.put("/users/:id", userActions.update);

/* ************************************************************************* */

module.exports = router;
