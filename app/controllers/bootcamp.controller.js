const { 
    bootcamp,
    usuario
} = require('../models');

const createBootcamp = async (bootcamp) => {
    try {
        const curso = await bootcamp.create({
            name: bootcamp.name,
            cue: bootcamp.cue,
            description: bootcamp.description,
        });
        console.log(` El Bootcamp ${JSON.stringify(curso, null, 4)} ha sido creado`);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const addUserBootcamp = async (bootcampId, usuarioId) => {
   try {
    const  curso = await bootcamp.findByPk(bootcampId);
    if (!curso) {
        throw new Error('El Bootcamp no existe');
    }
    const user = await usuario.findByPk(usuarioId);
    if (!user) {
        throw new Error('El Usuario no existe');
    }
    await curso.addUsuario(user);
    console.log(` El Usuario ${JSON.stringify(user, null, 4)} ha sido agregado al Bootcamp ${JSON.stringify(curso, null, 4)}`);
   return curso;
} catch (error) {
        console.log(error);
        throw error;
}
};
 
const findBootcampId = async (bootcampId) => {
    try {
        const curso = await bootcamp.findByPk(bootcampId, {
            include: [
                {
                   model: usuario,
                   as: 'usuario',
                   attributes: ['id', 'firstName', 'lastName', 'email'], 
                   through: {
                    attributes: []
        }
    }
]
});
console.log(` Se ha encontrado el bootcamp ${JSON.stringify(curso, null, 4)}`);
        return curso;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }  

    const findTodosBootcamp = async () => {
        try {
           const cursos = await bootcamp.findAll({
            include: [
                { 
                    model: usuario,
                    as: 'usuario',
                    attributes: ['id', 'firstName', 'lastName', 'email'], 
                    through: {
                        attributes: []
                    }
                }
            ]
        });
        console.log(` Se han encontrado los bootcamps ${JSON.stringify(cursos, null, 4)}`);
        return cursos;
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    };
    

module.exports = {
    createBootcamp,
    addUserBootcamp,
    findBootcampId,
    findTodosBootcamp
    
};


