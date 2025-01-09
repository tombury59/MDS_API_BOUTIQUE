const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');

const Commentaire = sequelize.define('Commentaire', {
    idCommentaire : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    noteCommentaire: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    contenuCommentaire: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isVisible: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    dateCreation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateSuppr: {
        type: DataTypes.STRING,
        allowNull: true
    },
    idUtilisateur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idProduit: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'COMMENTAIRE',
    timestamps: false,
});

module.exports = Commentaire;
