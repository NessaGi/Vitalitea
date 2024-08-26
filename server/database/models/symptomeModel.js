const AbstractModel = require("./AbstractModel");

class SymptomeModel extends AbstractModel {
  constructor() {
    // Appelle le constructeur de AbstractModel avec le nom de la table
    super({ table: "symptome" });
  }

  // Méthode pour récupérer tous les enregistrements de la table symptomes
  async readAll() {
    const query = `SELECT * FROM ${this.table}`;
    const [rows] = await this.database.execute(query);
    return rows;
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

  // Méthode pour récupérer un symptôme par nom
  async findByName(name) {
    const query = `SELECT * FROM ${this.table} WHERE LOWER(name) LIKE LOWER(?)`;
    const [rows] = await this.database.execute(query, [`%${name}%`]);
    return rows;
  }
}

module.exports = SymptomeModel;
