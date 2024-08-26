const tables = require("../../database/tables");

// Browse (Lister toutes les plantes)
const browse = async (req, res) => {
  try {
    const plantes = await tables.plante.readAll();
    res.json(plantes);
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
    const plante = await tables.plante.readById(req.params.id);
    if (plante) {
      res.json(plante);
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
    const plantes = await tables.plante.getBySymptome(symptomeId);
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
