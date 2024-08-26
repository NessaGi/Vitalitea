const AbstractModel = require("./AbstractModel");

class PlanteModel extends AbstractModel {
  constructor() {
    // Appelle le constructeur de AbstractModel avec le nom de la table
    super({ table: "plante" });
  }

   // Méthode pour lire toutes les plantes
   async readAll() {
    const query = `SELECT * FROM plante`;
    const [rows] = await this.database.query(query);
    return rows;
  }

  async getAllProperties() {
    const query = `SELECT DISTINCT properties FROM plante WHERE properties IS NOT NULL AND properties != ''`;
    const [rows] = await this.database.execute(query);

    const propertiesSet = new Set();
    rows.forEach((row) => {
      const propertiesArray = row.properties
        .split(",")
        .map((prop) => prop.trim());
      propertiesArray.forEach((prop) => propertiesSet.add(prop));
    });

    return Array.from(propertiesSet);
  }

  // Méthode pour récupérer les plantes par symptôme
  async getBySymptome(symptomeId) {
    const query = `
      SELECT plante.* 
      FROM plante
      JOIN propertiesPlante ON plante.id = propertiesPlante.plante_id
      WHERE propertiesPlante.property_id = ?`;
    const [rows] = await this.database.execute(query, [symptomeId]);
    return rows;
  }

  async getByProperty(propertyId) {
    const query = `
      SELECT p.*
      FROM plante p
      JOIN propertiesPlante pp ON p.id = pp.plante_id
      WHERE pp.property_id = ?`;
    const [rows] = await this.database.execute(query, [propertyId]);
    return rows;
  }

  async getBySymptomAndProperty(symptomId, propertyId) {
    const query = `
      SELECT p.* 
      FROM plante p
      JOIN propertiesPlante pp ON p.id = pp.plante_id
      WHERE pp.property_id = ? AND pp.property_id = ?`;
    const [rows] = await this.database.execute(query, [symptomId, propertyId]);
    return rows;
  }
}

module.exports = PlanteModel;
