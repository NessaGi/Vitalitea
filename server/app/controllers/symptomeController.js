const tables = require("../../database/tables");

// Browse (Parcourir les données)
const browse = async (req, res) => {
  try {
    const symptomes = await tables.symptome.readAll();
    res.json(symptomes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un symptôme par nom
const getPlantesBySymptomeName = async (req, res) => {
  const { name } = req.query;
  try {
    const symptomes = await tables.symptome.findByName(name);
    if (symptomes.length > 0) {
      const symptomeId = symptomes[0].id; // On suppose que le premier résultat est correct
      const plantes = await tables.symptome.getBySymptome(symptomeId);
      if (plantes.length > 0) {
        res.json(plantes);
      } else {
        res.status(404).json({ message: "Aucune plante trouvée pour ce symptôme" });
      }
    } else {
      res.status(404).json({ message: "Symptôme non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des plantes", error: error.message });
  }
};

// Récupérer les plantes associées à un symptôme
const getPlantesBySymptome = async (req, res) => {
  const { symptomeId } = req.params;
  try {
    const plantes = await tables.symptome.getBySymptome(symptomeId);
    if (plantes.length > 0) {
      res.json(plantes);
    } else {
      res.status(404).json({ message: "Aucune plante trouvée pour ce symptôme" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des plantes", error: error.message });
  }
};


// Exportation des fonctions
module.exports = {
  browse,
  getPlantesBySymptomeName,
  getPlantesBySymptome,
};