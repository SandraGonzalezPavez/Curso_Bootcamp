const sequelize = require('../app/config/db.config');

const bootcamp = require('../app/models/bootcamp.model');



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
        await bootcamp.bulkCreate(bootcamps, { validate: true });
    } catch (error) {
        console.log(error);
    }finally {
        await sequelize.close();
    }
})();