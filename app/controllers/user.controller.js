const { 
    bootcamp,
    usuario
} = require('../models');

const createUsuario = async (Usuario) => {
    try {
        const user = await usuario.create({
            firstName: Usuario.firstName,
            lastName: Usuario.lastName,
            email: Usuario.email
        });
        console.log(`Se ha creado el usuario ${JSON.stringify(user, null, 4)}`);
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const findUsuarioPorId = async (usuarioId) => {
    try {
        const user = await usuario.findByPk(usuarioId, {
            include: [
                {
                    model: bootcamp,
                    as: 'bootcamp',
                    attributes: ['id', 'title', 'cue','description'],
                    through: {
                        attributes: []
                    }

                }
            ]
        });
        console.log(`el usuario ${JSON.stringify(user, null, 4)} se ha encontrado`);
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
const findTodosLosUsuarios = async () => {
    try {
        const usuarios =  await usuario.findAll({
            include: [
                {
                    model: bootcamp,
                    as: 'bootcamp',
                    attributes: ['id', 'title', 'cue','description'],
                    through: {
                        attributes: []
                    }

                }
            ]
        });
        console.log(`Se han encontrado los usuarios ${JSON.stringify(usuarios, null, 4)}`);
        return usuarios;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const actualizarUsuario = async (Usuario) => {
    try {
        const user = await usuario.findByPk(Usuario.id);
        if (user) {
           
             const   actualizados = await usuario.update({
                    firstName: Usuario.firstName,
                    lastName:Usuario.lastName,
                    email: Usuario.email
                }, {
                    where: { id:Usuario.id }
                });
                console.log(`actualizados: ${actualizados}`);
                console.log(`Se ha actualizado el usuario con id ${Usuario.id}`);
            
            }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
const borrarUsuario = async (id) => {
    try {
        const borrados = await usuario.destroy({ 
            where: { id }
        });
        console.log(`borrados: ${borrados}`);
        console.log(`Usuario id ${id} fue borrado con éxito`);
        return borrados;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createUsuario,
    findUsuarioPorId,
    findTodosLosUsuarios,
    actualizarUsuario,
    borrarUsuario
}
