const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const Utilisateur = sequelize.define('Utilisateur', {
    idUtilisateur: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    motDePasse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'UTILISATEUR',
    timestamps: false
});

module.exports = Utilisateur;
