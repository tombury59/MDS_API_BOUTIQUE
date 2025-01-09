const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const Adresse = sequelize.define('Adresse', {
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
    status: {
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
    tableName: 'ADRESSE',
    timestamps: false,
});

module.exports = Adresse;
