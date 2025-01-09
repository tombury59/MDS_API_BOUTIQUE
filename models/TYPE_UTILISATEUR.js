const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');
//const Utilisateur = require('./UTILISATEUR');

const TypeUtilisateur = sequelize.define('TypeUtilisateur', {
    idType: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomType: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'TYPE_UTILISATEUR',
    timestamps: false,
});

//TypeUtilisateur.hasMany(Utilisateur, { foreignKey: 'idType', as: 'utilisateurs' });

module.exports = TypeUtilisateur;
