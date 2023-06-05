const { DataTypes } = require('sequelize');
const SqDb = require('../Config/Config');

module.exports.Avoir = SqDb.define('Avoir' , {
    idMed : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    idPat : {
        type : DataTypes.INTEGER,
        allowNull : false,
    }
})