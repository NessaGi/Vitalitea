const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const streetartActions = require("./controllers/streetartActions");

// Route to get a list of items
router.get("/streetarts", streetartActions.browse);

const userActions = require("./controllers/userActions");

// Route to get a list of users
router.get("/users", userActions.browse);

// Route to delete a list of users
router.delete("/users/:id", userActions.destroy);

module.exports = router;
