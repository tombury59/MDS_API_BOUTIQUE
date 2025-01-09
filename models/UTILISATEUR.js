const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const Utilisateur = sequelize.define('Utilisateur', {
    idUtilisateur: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomUtilisateur: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenomUtilisateur: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailUtilisateur: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    mdpUtilisateur: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idType: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'UTILISATEUR',
    timestamps: false
});

module.exports = Utilisateur;
