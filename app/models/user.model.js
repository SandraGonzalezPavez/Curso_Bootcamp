const {sequelize, DataTypes} = require ('sequelize');
const sequelize = require ('../config/db.config');

const usuario = sequelize.define('usuario', {
   firstName: {
    type:DataTypes.STRING,
    notNull:true
   }, 
   lastName: {
    type: DataTypes.STRING,
    notNull:true
   },
   email: {
    type: DataTypes.STRING,
    notNull:true,
    isEmail:true
   }
});

module.exports = usuario;