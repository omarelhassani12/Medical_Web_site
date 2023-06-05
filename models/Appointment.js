const sqDB = require('../Config/Config');
const { DataTypes} = require('sequelize');

const Appointment = sqDB.define('appointments' ,   {
    id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    DateApp: {
        type: DataTypes.DATE,
     },
    HourApp: {
        type : DataTypes.STRING,
        allowNull: false,
    }, 
    idPat : { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }, 
    idDoc : {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    } 
})

module.exports = Appointment;