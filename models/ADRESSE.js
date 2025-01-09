const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const Adresse = sequelize.define('Adresse', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rue: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codePostal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ville: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    pays: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isPrincipal: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    idUtilisateur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    tableName: 'ADRESSE',
    timestamps: false,
});

module.exports = Adresse;
