const { DataTypes } = require('sequelize');
const SqDb = require('../Config/Config');


module.exports.Experiance = SqDb.define('Experiance' , {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    idMed : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    labelExperiance : {
        type : DataTypes.STRING,
        allowNull : false
    },
    descriptionExperiance : {
        type : DataTypes.STRING,
        allowNull : false
    },
    DateStart : {
        type : DataTypes.DATE,
        allowNull : false
    },
    DateEnd : {
        type : DataTypes.DATE,
        allowNull : false
    }
})