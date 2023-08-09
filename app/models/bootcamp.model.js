const { DataTypes } = require ('sequelize');
const sequelize = require ('../app/');
const bootcamp = sequelize.define('bootcamp', {
    title: {
        type:DataTypes.STRING,
    notNull:true
    },
    cue: {
        type:DataTypes.INTEGER,
        notNull:true
    },
    description: {
        type:DataTypes.STRING,
        notNull:true
    }

});
module.exports = bootcamp;