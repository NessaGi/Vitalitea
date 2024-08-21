const tables = require('../../database/tables');

// Browse (Parcourir les données)
const browse = async (req, res) => {
  try {
      const symptomes = await tables.symptomes.findAll();
      res.json(symptomes);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Read (Lire une donnée spécifique)
const read = async (req, res) => {
  try {
      const symptome = await tables.symptomes.findById(req.params.id);
      res.json(symptome);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

// Edit (Modifier une donnée)

// Add (Ajouter une donnée)

// Delete (Supprimer une donnée)
module.exports = {
  browse,
  read,
};