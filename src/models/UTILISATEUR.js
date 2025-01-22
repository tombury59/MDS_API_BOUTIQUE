const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');
const TypeUtilisateur = require('./TYPE_UTILISATEUR');

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
    telUtilisateur: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idResponsable: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    dateCreation: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'UTILISATEUR',
    timestamps: false,
});

Utilisateur.belongsTo(TypeUtilisateur, { foreignKey: 'idType', as: 'typeUtilisateur' });

module.exports = Utilisateur;
