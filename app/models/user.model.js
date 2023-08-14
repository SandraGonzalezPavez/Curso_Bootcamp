const { DataTypes} = require ('sequelize');
const sequelize = require ('../config/db.config');

const usuario = sequelize.define('usuario', {
   firstName: {
    type:DataTypes.STRING,
    allowNull:false
   }, 
   lastName: {
    type: DataTypes.STRING,
    allowNull:false
   },
   email: {
    type: DataTypes.STRING,
    allowNull:false,
    isEmail:true
   }
});

module.exports = usuario;