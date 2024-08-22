const tables = require('../../database/tables');

// Browse (Parcourir les données)
const browse = async (req, res) => {
  try {
      const symptomes = await tables.symptome.readAll();
      res.json(symptomes);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Read (Lire une donnée spécifique)
const read = async (req, res) => {
  const { id } = req.params;

  try {
    
      const symptome = await tables.symptome.readById(id);
      if (symptome) {
      res.status(200).json(symptome);
  } else {
    res.status(404).json({ 
      message: "error.message", 
    });
  }
  } catch (error) {
      res.status(500).json({  
        error: "Internal Server Error",
        details: "err.message",
   });
  }
};

// Edit (Modifier une donnée)

// Add (Ajouter une donnée)

// Delete (Supprimer une donnée)
module.exports = {
  browse,
  read,
};
