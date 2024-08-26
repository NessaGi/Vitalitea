// Récupération des variables depuis le fichier .env pour la connexion à la base de données
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Importation de mysql2 avec prise en charge des promesses
const mysql = require('mysql2/promise');

// Création d'un pool de connexions à la base de données
const client = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,  // Assure que les connexions sont gérées dans l'ordre d'arrivée
});

// Vérification de la connexion à la base de données
client.checkConnection = async () => {
  try {
    const connection = await client.getConnection();
    console.info(`Connected to database ${DB_NAME}`);
    connection.release();
  } catch (error) {
    console.error("Failed to establish a connection with the database:", error.message);
    // Gestion d'erreurs supplémentaires ou reconnexion possible ici
  }
};
// Store database name into client for further uses
client.databaseName = DB_NAME;

// Ready to export
module.exports = client;
