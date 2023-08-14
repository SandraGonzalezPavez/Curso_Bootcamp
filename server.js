const express = require('express');
app = express();
require('dotenv').config();
PORT = process.env.PORT;
const { StatusCodes } = require('http-status-codes');
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

app.get('/usuario/create/:firstName/:lastName/:email', async (req, res) => {
    const firstName = req.params.firstName;
    const lastName = req.params.lastName;
    const email = req.params.email;
 try {
        const user = await createUsuario({ firstName, lastName, email });
        res.status(StatusCodes.CREATED).json({ 
            message: `usuario ${user.firstName} ${user.lastName}fue creado con éxito`,
            usuario: user 
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
});

const { bootcamp } = require('./app/models');
app.get('/bootcamp/createBootcamp/:title/title/:cue/cue/:description/description', async (req, res) => {
    const name = req.params.title;
    const cue = req.params.cue;
    const description = req.params.description;
    try {
        const curso = await createBootcamp({ name, cue, description });
        res.status(StatusCodes.CREATED).json({ 
            message: `Bootcamp ${curso.name} fue creado con éxito`,
            bootcamp: curso
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
});

// Insertar usuarios en los bootcamps
app.get('/bootcamp/addUserBootcamp/idBootcamp/:idBootcamp/idUsuario/:idUsuario', async (req, res) => {
    const idBootcamp = Number(req.params.idBootcamp);
    const idUsuario = Number(req.params.idUsuario);
    try {
        const resultado= await addUserBootcamp(idBootcamp, idUsuario);
        res.status(StatusCodes.CREATED).json({
            message: `Se agregó usuario id ${idUsuario} al proyecto id ${idBootcamp}`,
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
        const cursos = await findTodosBootcamp();
        res.status(StatusCodes.OK).json({
            message: `se encontraron ${cursos.length} proyectos`,
            bootcamp: cursos
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
        const usuarios = await findTodosLosUsuarios();
        res.status(StatusCodes.OK).json({
            message: `se encontraron ${usuarios.length} usuarios`,
            usuario: usuarios
        });

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });

    }
});

//Actualizar un usuario por id
app.get('/usuario/actualizar/id/:id/firstName/:firstName/lastName/:lastName/email/:email', async (req, res) => {
    const id = Number(req.params.id);
    const firstName = req.params.firstName;
    const lastName = req.params.lastName;
    const email = req.params.email;
    try {
        const actualizados = await actualizarUsuario({
            id,
            firstName,
            lastName,
            email
        });
        if (actualizados) {
            
                res.status(StatusCodes.CREATED).json({ 
                    message: `usuario id ${id} fue actualizado con éxito`
                });
            
        } else {
            res.status(StatusCodes.NOT_FOUND).json({ 
                message: `usuario id ${id} no fue encontrado`
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
});

// Eliminar un usuario por id
app.get('/usuario/borrar/id/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const borrados = await borrarUsuario(id);
        if (borrados) {
            res.status(StatusCodes.CREATED).json({ 
                message: `usuario id ${id} fue borrado con éxito`
            });
        } else {
            res.status(StatusCodes.NOT_FOUND).json({ 
                message: `usuario id ${id} no fue encontrado`
            });
        }
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
});










app.listen(PORT, () => console.log(`Inicializando en el puerto ${PORT}`));
