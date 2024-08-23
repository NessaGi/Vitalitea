const express = require("express");

const router = express.Router();
const symptomeController = require("./controllers/symptomeController");
// const planteController = require('./controllers/planteController');

// Routes pour les symptômes
router.get("/symptomes", symptomeController.browse);

// Routes pour les plantes associées à un symptôme
router.get("/plantes/symptome/:symptomeId", symptomeController.getPlantesBySymptome);

module.exports = router;
