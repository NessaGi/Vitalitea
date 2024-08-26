const express = require('express');

const router = express.Router();
const symptomeController = require('./controllers/symptomeController');

// Routes pour les symptômes
router.get("/symptomes", symptomeController.browse);

// Routes pour les plantes associées à un symptôme par ID
router.get("/plantes/symptome/:symptomeId", symptomeController.getPlantesBySymptome);

// Routes pour les plantes associées à un symptôme par nom
router.get("/plantes/symptome", symptomeController.getPlantesBySymptomeName);

module.exports = router;