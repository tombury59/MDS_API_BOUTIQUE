const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const DetailCommande = sequelize.define('DetailCommande', {
    idDetail: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantiteProduit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    prixUnitaireHT: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dateService: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idProduit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idCommande: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'DETAIL_COMMANDE',
    timestamps: false,
});

module.exports = DetailCommande;
