const AbstractModel = require("./AbstractModel");

class PlanteModel extends AbstractModel {
  constructor() {
    // Appelle le constructeur de AbstractModel avec le nom de la table
    super({ table: "plants" });
  }

  // Méthode pour récupérer les plantes par symptôme
  async getBySymptome(symptomeId) {
    const query = `
          SELECT plants.* 
          FROM plants
          JOIN Properties_plants ON plants.id = Properties_plants.plante_id
          WHERE Properties_plants.property_id = ?`;

    const [rows] = await this.database.execute(query, [symptomeId]);
    return rows;
  }

  // Autres méthodes CRUD...
}

module.exports = PlanteModel;
