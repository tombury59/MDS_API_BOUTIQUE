const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const Commande = sequelize.define('Commande', {
    idCommande: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    montantTotalHT: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    montantTotalTTC: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    statut: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateCommande: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateModif: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dateSuppr: {
        type: DataTypes.STRING,
        allowNull: true
    },
    idUtilisateur: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'COMMANDE',
    timestamps: false,
});

module.exports = Commande;
