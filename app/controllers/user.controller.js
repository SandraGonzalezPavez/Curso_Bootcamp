const { usuario } = require('../models');

const createUsuario = async (usuario) => {
    try {
        const usuari = await usuari.create({
            firstName: usuario.firstName,
            lastName: usuario.lastName,
            email: usuario.email
        });
        console.log(`Se ha creado el usuario ${JSON.stringify(usuario, null, 4)}`);
        return usuario;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const findUsuarioPorId = async (usuarioId) => {
    try {
        const usuario = await usuario.findByPk(usuarioId, {
            include: [
                {
                    model: bootcamp,
                    as: 'bootcamp',
                    attributes: ['id', 'firstName', 'lastName', 'email'],
                    through: {
                        attributes: []
                    }

                }
            ]
        });
        console.log(`el usuario ${JSON.stringify(usuario, null, 4)} se ha encontrado`);
        return usuario;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
const findTodosLosUsuarios = async () => {
    try {
        const usuarios = usuario.findAll({
            include: [
                {
                    model: bootcamp,
                    as: 'bootcamp',
                    attributes: ['id', 'firstName', 'lastName', 'email'],
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

const actualizarUsuario = async (usuario) => {
    try {
        await usuario.update({
            firstName: usuario.firstName,
            lastName: usuario.lastName,
            email: usuario.email
        });
        console.log(`Se ha actualizado el usuario ${JSON.stringify(usuario, null, 4)}`);
        return usuario;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const borrarUsuario = async (usuarioId) => {
    try {
        await usuario.destroy({
            where: {
                id: usuarioId
            }
        });
        console.log(`Se ha borrado el usuario ${JSON.stringify(usuarioId, null, 4)}`);
        return usuarioId;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {
    createUsuario,
    findUsuarioPorId,
    findTodosLosUsuarios,
    actualizarUsuario,
    borrarUsuario
}
