const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const StockMouvement = sequelize.define('StockMouvement', {
    idMouv: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    typeProduit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantiteMouv: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    typeMouv: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateMouv: {
        type: DataTypes.STRING,
        allowNull: false
    },

    idProduit: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'STOCK_MOUVEMENT',
    timestamps: false,
});

module.exports = StockMouvement;
