const { DataTypes } = require('sequelize');
const sqDB = require("../Config/Config");

const Message = sqDB.define('Message', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idSender: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idReceiver: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  isSee: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  dateMessage: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW ,
    // get() {
    //   const date = this.getDataValue('dateMessage');
    //   return date.toLocaleString(); // Format the date as a human-readable string
    // }
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
});

module.exports = Message;
