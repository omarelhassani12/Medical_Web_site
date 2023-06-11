const { DataTypes } = require('sequelize');
const SqDb = require('../Config/Config');


const Experiance = SqDb.define('experiances' , {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
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
} ,{
    timestamps: false, // Disable timestamps
} )

module.exports = Experiance