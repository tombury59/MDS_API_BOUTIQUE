const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const Message = sequelize.define('Message', {
    idMessage: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sujetMessage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contenuMessage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estLu: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    dateEnvoiMessage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateSupprMessage: {
        type: DataTypes.STRING,
        allowNull: true
    },
    idRecevoir: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idEnvoyeur: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'MESSAGE',
    timestamps: false,
});

module.exports = Message;
