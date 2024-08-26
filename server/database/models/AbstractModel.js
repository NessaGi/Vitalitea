// Importation du client de base de données
const database = require("../client");

class AbstractModel {
  constructor({ table }) {
    // Empêche l'instanciation directe de la classe abstraite
    if (this.constructor === AbstractModel) {
      throw new TypeError(
        "Abstract class 'AbstractModel' cannot be instantiated directly"
      );
    }

    // Stocke le nom de la table
    this.table = table;

    // Fournit un accès au client de la base de données
    this.database = database;
  }

  // Vous pouvez ajouter des méthodes génériques ici, si nécessaire, par exemple:
  // async findAll() {
  //   const query = `SELECT * FROM ${this.table}`;
  //   const [rows] = await this.database.execute(query);
  //   return rows;
  // }
}

// Prêt à être exporté
module.exports = AbstractModel;
