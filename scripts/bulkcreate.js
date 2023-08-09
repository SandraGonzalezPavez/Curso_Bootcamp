const usuario = require('../models');
const sequelize = require('../config/db.config');
const bootcamp = require('../models');

const usuarios = [
    {
        firstName: "Mateo",
        lastName: "Diaz",
        email: "mateo.diaz@correo.com"
    },

    {
        firstName: "Santiago",
        lastName: "Mejias",
        email: "santia.mejias@correo.com"
    },
    {
        firstName: "Lucas",
        lastName: "Rojas",
        email: "lucas.roja@correo.com"
    },
    {
        firstName: "Facundo",
        lastName: "Fernandez",
        email: "facundo.fernandez@correo.com"
    }

];

(async () => {
    try {
        await usuario.bulkcreate(usuarios, { validate: true });
    } catch (error) {
        console.log(error);
    } finally {
        await sequelize.close();
    }
})();

const bootcamps = [
    {
        title: "Introduciendo el Bootcamp de React",
        cue: "10",
        description: "React es la libreria más usada en Javscript para el desarrollo de interfaces"
    },
    {
        title: "Bootcamp Desarrollo Wb Full Stack",
        cue: "12",
        description: " Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: Javscript, nodeJS, Angular, MongoDB, ExpressJS"
    },
    {
        title: " Bootcamp Big Data, Inteligenica Artificial & Machine Learning",
        cue: "18",
        description: "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e Intégralos con modelos avanzados"
    }
];

(async () => {
    try {
        await bootcamp.bulkcreate(bootcamps, { validate: true });
    } catch (error) {
        console.log(error);
    }finally {
        await sequelize.close();
    }
})();