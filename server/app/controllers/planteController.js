const tables = require("../../database/tables");

// Browse (Lister toutes les plantes)
const browse = async (req, res) => {
  try {
    const plantes = await tables.plante.readAll();
    res.json(plantes);
  } catch (error) {
    res.status(500).json({
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
    res.status(500).json({
      message: "Erreur lors de la récupération de la plante",
      error: error.toString(),
    });
  }
};

const getProperties = async (req, res) => {
  try {
    const query = `
       SELECT DISTINCT properties 
      FROM plante
      WHERE properties IS NOT NULL AND properties != ''
    `;
    const [rows] = await tables.plante.database.query(query);

    const propertiesSet = new Set();
    rows.forEach((row) => {
      const propertiesArray = row.properties
        .split(",")
        .map((prop) => prop.trim());
      propertiesArray.forEach((prop) => propertiesSet.add(prop));
    });

    const properties = Array.from(propertiesSet);
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des propriétés des plantes",
      error: error.toString(),
    });
  }
};

const getPlantesByFilters = async (req, res) => {
  const { symptom, property } = req.query;

  try {
    let plantes;
    
    if (symptom && property) {
      plantes = await tables.plante.getBySymptomAndProperty(symptom, property);
    } else if (symptom) {
      plantes = await tables.plante.getBySymptome(symptom);
    } else if (property) {
      plantes = await tables.plante.getByProperty(property);
    } else {
      plantes = await tables.plante.readAll();
    }

    res.json(plantes);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des plantes",
      error: error.message,
    });
  }
};


// Edit (Modifier une donnée)

// Add (Ajouter une donnée)

// Delete (Supprimer une donnée)

// Récupération par symptôme
const getPlantesBySymptome = async (req, res) => {
  const { symptomeId } = req.query;
  try {
    const plantes = await tables.plante.getBySymptome(symptomeId);
    res.json(plantes);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des plantes",
      error: error.toString(),
    });
  }
};

// Fonction pour récupérer une plante par son ID
const getPlanteById = async (req, res) => {
  const { id } = req.params;
  try {
    const query = "SELECT * FROM plante WHERE id = ?";
    const [results] = await tables.plante.database.execute(query, [id]);

    if (results.length === 0) {
      return res.status(404).json({ message: "Plante non trouvée" });
    }

    return res.status(200).json(results[0]);
  } catch (error) {
    console.error("Erreur lors de la récupération de la plante :", error);
    return res
      .status(500)
      .json({ message: "Erreur serveur", error: error.toString() });
  }
};

module.exports = {
  browse,
  read,
  getPlantesBySymptome,
  getPlanteById,
  getProperties,
  getPlantesByFilters,
};
