const tables = require("../../database/tables");

// Browse (Lister toutes les plantes)
const browse = async (req, res) => {
  try {
    const plants = await tables.plants.findAll();
    res.json(plants);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération des plantes",
        error: error.toString(),
      });
  }
};

// Read (Lire une plante spécifique)
const read = async (req, res) => {
  try {
    const plant = await tables.plants.findById(req.params.id);
    if (plant) {
      res.json(plant);
    } else {
      res.status(404).json({ message: "Plante non trouvée." });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération de la plante",
        error: error.toString(),
      });
  }
};

// Edit (Modifier une donnée)

// Add (Ajouter une donnée)

// Delete (Supprimer une donnée)

// Read (Récupérer les plantes associées à un symptôme spécifique)
const getPlantesBySymptome = async (req, res) => {
  const { symptomeId } = req.params;
  try {
    const plantes = await tables.plants.getBySymptome(symptomeId);
    if (plantes.length > 0) {
      res.json(plantes);
    } else {
      res
        .status(404)
        .json({ message: "Aucune plante trouvée pour ce symptôme." });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération des plantes",
        error: error.toString(),
      });
  }
};
module.exports = {
  browse,
  read,
  getPlantesBySymptome,
};
