const { DataTypes } = require('sequelize');
const SqDb =  require('../Config/Config');


Certificate = SqDb.define('certificate' , {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    NameCertificate : {
        type : DataTypes.STRING,
        allowNull : false
    },
    SourceCertificate : {
        type : DataTypes.STRING,
        allowNull : false
    },
    DateCertificate : { 
        type : DataTypes.DATE,
        allowNull : false
    },


})

module.exports = Certificate;