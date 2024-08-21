const express = require('express');

const router = express.Router();
const symptomeController = require('./controllers/symptomeController');


// Routes pour les symptômes
router.get('/symptomes', symptomeController.getAllSymptomes);

module.exports = router;