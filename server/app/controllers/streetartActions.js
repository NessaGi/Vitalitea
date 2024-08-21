const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res) => {
  try {
    // Fetch all items from the database
    const streetarts = await tables.streetart.readAll();

    // Respond with the items in JSON format
    res.status(200).json(streetarts);
  } catch (err) {
    // Respond with a 500 Internal Server Error and detailed error message
    res.status(500).json({
      error: "Internal Server Error",
      details: err.message,
    });
  }
};

// The R of BREAD - Read (Single Item) operation
const read = async (req, res) => {
  const { id } = req.params;

  try {
    // Fetch a single item by ID from the database
    const streetart = await tables.streetart.readById(id);

    if (streetart) {
      // Respond with the item in JSON format
      res.status(200).json(streetart);
    } else {
      // Respond with a 404 Not Found if the item is not found
      res.status(404).json({
        error: "StreetArt not found",
      });
    }
  } catch (err) {
    // Respond with a 500 Internal Server Error and detailed error message
    res.status(500).json({
      error: "Internal Server Error",
      details: err.message,
    });
  }
};
const destroy = async (req, res) => {
  try {
    // Fetch the userId from the request parameters
    const streetartID = req.params.id;

    // Attempt to delete the user from the database
    const rows = await tables.streetart.destroy(streetartID);

    // Check if any rows were affected (meaning the user was deleted)
    if (rows.affectedRows > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error("Error deleting streetart:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  browse,
  read,
  destroy,
};