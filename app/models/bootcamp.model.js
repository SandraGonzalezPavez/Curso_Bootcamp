const { DataTypes } = require ('sequelize');
const sequelize = require ('../config/db.config');

const bootcamp = sequelize.define('bootcamp', {
    title: {
        type:DataTypes.STRING,
        allowNull:false
    },
    cue: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    description: {
        type:DataTypes.STRING,
        allowNull:false
    }

});
module.exports = bootcamp;