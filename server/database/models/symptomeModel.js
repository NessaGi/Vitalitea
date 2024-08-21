const AbstractModel = require("./AbstractModel");

class SymptomeModel extends AbstractModel {
  constructor() {
    // Appelle le constructeur de AbstractModel avec le nom de la table
    super({ table: "symptomes" });
  }

  // Méthode pour récupérer tous les enregistrements de la table symptomes
  async getAll() {
    const query = `SELECT * FROM ${this.table}`;
    const [rows] = await this.database.execute(query);
    return rows;
  }
}

module.exports = SymptomeModel;
