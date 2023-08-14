const  usuario = require('../app/models/user.model');
const sequelize = require('../app/config/db.config');

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
        await usuario.bulkCreate(usuarios, { validate: true });
    } catch (error) {
        console.log(error);
    } finally {
        await sequelize.close();
    }
})();

