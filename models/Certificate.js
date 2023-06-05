const { DataTypes } = require('sequelize');
const SqDb =  require('../Config/Config');


Certificate = SqDb.define('certificate' , {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    idMed : {
        type : DataTypes.INTEGER,
        allowNull : false
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
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // set the default value to the current time
        allowNull: false,
      },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },

})

module.exports = Certificate;