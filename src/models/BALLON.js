const { DataTypes } = require('sequelize');
const sequelize = require('./connectionBDD');


const Ballon = sequelize.define('Ballon', {
    idBallon: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomSport: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tailleBallon: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'BALLON',
    timestamps: false
});

module.exports = Ballon;
