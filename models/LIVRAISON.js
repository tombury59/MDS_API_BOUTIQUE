const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const Livraison = sequelize.define('Livraison', {
    idLivraison: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    statutLivraison: {
        type: DataTypes.STRING,
        allowNull: false
    },
    datePrevu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateLivraison: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateSuppr: {
        type: DataTypes.STRING,
        allowNull: true
    },
    IdLivreur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idCommande: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'LIVRAISON',
    timestamps: false,
});

module.exports = Livraison;
