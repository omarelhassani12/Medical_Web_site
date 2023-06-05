const Sequelize = require('sequelize');

const SeqDB = new Sequelize(process.env.DB_NAME ,process.env.DB_USER , process.env.DB_PASS,{
    host :  process.env.HOST,
    dialect : process.env.DIALECT ,
    timezone: '+01:00',
    logging: false, // Disable query logging in console
})

module.exports = SeqDB