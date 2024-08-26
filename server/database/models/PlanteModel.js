const AbstractModel = require("./AbstractModel");

class PlanteModel extends AbstractModel {
  constructor() {
    // Appelle le constructeur de AbstractModel avec le nom de la table
    super({ table: "plante" });
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

  // Autres méthodes CRUD...
}

module.exports = PlanteModel;
