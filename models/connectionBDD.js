const { Sequelize } = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: process.env.DB_DIALECT,
    port:process.env.DB_PORT,
    dialectOptions: {
        encrypt: true,
        trustServerCertificate: true,
        requestTimeout: 30000
    }
});

// Tester la connexion
sequelize.authenticate()
    .then(() => {
        console.log('✅ Connexion réussie à la base de données avec Sequelize');
    })
    .catch(err => {
        console.error('❌ Impossible de se connecter à la base de données :', err);
    });

module.exports = sequelize;
