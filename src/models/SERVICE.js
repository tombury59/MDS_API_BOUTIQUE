const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const Service = sequelize.define('Service', {
    idService: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    typeService: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dureeMinutesService: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isSurPlace: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    isDeplacement: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    idProduit: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'SERVICE',
    timestamps: false,
});

module.exports = Service;
