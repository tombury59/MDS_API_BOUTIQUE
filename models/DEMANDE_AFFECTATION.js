const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const DemandeAffectation = sequelize.define('DemandeAffectation', {
    idDemande: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    statutDemande: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateDemande: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateTraitement: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idResponsable: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idUtilisateur: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'DEMANDE_AFFECTATION',
    timestamps: false,
});

module.exports = DemandeAffectation;
