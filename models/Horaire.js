const {DataTypes } = require('sequelize');;
const SqDb = require('../Config/Config') ;

const Horaire = SqDb.define( 'Horaire' , {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    Nameday : {
        type : DataTypes.STRING,
        allowNull : false
    },
    StartMorning : {
        type : DataTypes.STRING,
        allowNull : true
    },
    EndMornign : {
        type : DataTypes.STRING,
        allowNull : true
    },
    StartEvening : {
        type : DataTypes.STRING,
        allowNull : true,
    },
    EndEvening : {
        type : DataTypes.STRING,
        allowNull : true
    }
})

module.exports = Horaire;