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
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      HourApp: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    idPat : { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }, 
    idDoc: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 93,
        references: {
            model: 'users',
            key: 'id'
        }
    }
    
})

module.exports = Appointment;