const express = ('express');
app = express();
require('dotenv').config();
PORT = process.env.PORT;
const {
    createUsuario,
    findUsuarioPorId,
    findTodosLosUsuarios,
    actualizarUsuario,
    borrarUsuario
} = require('./app/controllers/user.controller');

const {
    createBootcamp,
    addUserBootcamp,
    findBootcampId,
    findTodosBootcamp

} = require('./app/controllers/bootcamp.controller');

const { StatusCodes } = ('http-status-codes');

// Insertar usuarios en los bootcamps
app.get('/bootcamp/addUserBootcamp/idBootcamp/:idBootcamp/idUsuario/:idUusuario', async (req, res) => {
    const idBootcamp = Number(req.params.idBootcamp);
    const idUsuario = Number(req.params.idUusuario);
    try {
        const resultado = await addUserBootcamp(idBootcamp, idUsuario);
        res.status(StatusCodes.CREATED).json({
            message: `Se agregó usuario id ${idUser} al proyecto id ${idProject}`,
            bootcamp: resultado
        });

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message
        });
    }
});

// Consultar bootcamps por id con sus usuarios
app.get('/bootcamp/findBootcampId/idBootcamp/:idBootcamp', async (req, res) => {
    const idBootcamp = Number(req.params.idBootcamp);
    try {
        const curso = await findBootcampId(idBootcamp);
        res.status(StatusCodes.OK).json({
            message: 'Bootcamp encontrado',
            bootcamp: curso
        });
    } catch (error) {
        request.status(StatusCodes.NOT_FOUND).json({
            message: `proyecto id ${id} no fue encontrado`
        });
    }
});

// Listar todos los Bootcamps con sus usuarios
app.get('/bootcamp', async (req, res) => {
    try {
        const resultado = await findTodosBootcamp();
        res.status(StatusCodes.OK).json({
            message: `se encontraron ${proyectos.length} proyectos`,
            bootcamp: resultado
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message
        });
    }
});

// Consultar por usuarios con id, incluyendo los Bootcamps
app.get('/usuario/findUsuarioPorId/idUsuario/:idUsuario', async (req, res) => {
    const idUsuario = Number(req.params.idUsuario);
    try {
        const resultado = await findUsuarioPorId(idUsuario);
        res.status(StatusCodes.OK).json({
            message: 'Usuario encontrado',
            usuario: resultado
        });

    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({
            message: `usuario id ${id} no fue encontrado`
        });
    }
});

//Listar todos los usuarios
app.get('/usuario', async (req, res) => {
    try {
        const resultado = await findTodosLosUsuarios();
        res.status(StatusCodes.OK).json({
            message: `se encontraron ${usuarios.length} usuarios`,
            usuario: resultado
        });

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });

    }
});

//Actualizar un usuario por id
app.get('usuario/actualizar/idUsuario/:idUsuario/name/:name', async (req, res) => {

    const idUsuario = Number(req.params.idUsuario);
    const name = req.params.name;
    try {
        const resultado = await actualizarUsuario({
            idUsuario, name
        });
        if (resultado) {
            if (resultado !== -1) {
                res.status(StatusCodes.CREATED).json({
                    message: 'Usuario actualizado',
                    usuario: resultado
                });
            } else {
                res.status(StatusCodes.BAD_REQUEST).json({
                    message: 'No se actualizaron datos'
                });
            }; 
    } ;
}catch (error) {
            res.status(StatusCodes.NOT_FOUND).json({
                message: `usuario id ${id} no fue encontrado`
            });
        }
    
    });

// Eliminar un usuario por id
    app.get('usuario/borrar/idUsuario/:idUsuario', async (req, res) => {
        const idUsuario = Number(req.params.idUsuario);
        try {
            const borrado = await borrarUsuario(idUsuario);
            if (borrado) {
                res.status(StatusCodes.CREATED).json({
                    message: 'Usuario borrado',
                    usuario: borrado
                });
                
            } else {
                res.status(StatusCodes.NOT_FOUND).json({
                    message: 'No se encontró usuario'
                });
            };
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message
        });
    }});










app.listen(PORT, () => console.log('Inicializando en el puerto ${PORT}'));
