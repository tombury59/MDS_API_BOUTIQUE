const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const Produit = sequelize.define('Produit', {
    idProduit: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    }
}, {
    tableName: 'PRODUIT',
    timestamps: false
});

module.exports = Produit;
