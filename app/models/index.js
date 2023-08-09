const usuario =require('./user.model');
const bootcamp =require('./bootcamp.model');
usuario.belongsToMany(bootcamp, {
    through: 'usuario_bootcamp',
    as: bootcamp,
    foreignKey: 'usuario_id'
});

bootcamp.belongsToMany(usuario,{
    through: 'usuario_bootcamp',
    as: 'bootcamp',
    foreignKey: 'bootcamp_id'
});