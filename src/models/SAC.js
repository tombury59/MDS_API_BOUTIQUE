const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const Sac = sequelize.define('Sac', {
    idSac: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tailleSac: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capaciteSac: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    materiauSac: {
        type: DataTypes.STRING,
        allowNull: false
    },
    couleurSac: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stockSac: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    idProduit: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'SAC',
    timestamps: false,
});

module.exports = Sac;
