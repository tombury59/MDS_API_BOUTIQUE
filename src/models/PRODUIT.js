const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const Produit = sequelize.define('Produit', {
    idProduit: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    refProduit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomProduit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descProduit: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    prixHTProduit: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    isActif: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    dateCreation: {
        type: DataTypes.STRING,
        allowNull: false

    }
}, {
    tableName: 'PRODUIT',
    timestamps: false
});

module.exports = Produit;
