# Curso_Bootcamp
Base de datos de cursos de Bootcamp con sus usuarios

DESCRIPCIÓN
Planteamiento del ejercicio de aplicación.
Actualmente, el equipo de desarrollo de software emite un requerimiento, donde se desea diseñar la
gestión de cursos Bootcamp de una determinada empresa de adiestramiento. El equipo aplica la
Metodología Scrum, y realiza el primer Sprint que trata de elaborar el proyecto por medio de Node.js,
el registro de cursos Bootcamp y de usuarios de éstos.
En este primer Sprint se obtiene el diseño inicial de la base de datos, el cual consta del registro de
usuarios y de cursos Bootcamp.
Luego se ingresan los usuarios a los Bootcamp:
http://localhost:3000/bootcamp/addUserBootcamp/idBootcamp/1/idUsuario/1
http://localhost:3000/bootcamp/addUserBootcamp/idBootcamp/1/idUsuario/2
http://localhost:3000/bootcamp/addUserBootcamp/idBootcamp/2/idUsuario/1
http://localhost:3000/bootcamp/addUserBootcamp/idBootcamp/3/idUsuario/1
http://localhost:3000/bootcamp/addUserBootcamp/idBootcamp/3/idUsuario/2
http://localhost:3000/bootcamp/addUserBootcamp/idBootcamp/3/idUsuario/3



Realizar las siguientes consultas:
• Consultando el Bootcamp por id, incluyendo los usuarios:
http://Localhost:3000/bootcamp/findBootcampId/idBootcamp/3

• Listar todos los Bootcamp con sus usuarios:
http://localhost:3000/bootcamp

• Consultar un usuario por id, incluyendo los Bootcamp:
http://Localhost:3000/usuario/findUsuarioPorId/idUsuario/4

• Listar los usuarios con sus Bootcamp:
http://localhost:3000/usuario

• Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro
Sánchez:

• Eliminar un usuario por id; por ejemplo: el usuario con id=1:

