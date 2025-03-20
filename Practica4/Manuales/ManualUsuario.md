# Manual de Usuario

## Inicio de Sesión
La aplicación debe solicitar las credenciales de los usuarios que la utilizarán, siguiendo el inicio de sesión proporcionado por la Facultad de Ingeniería. Para ingresar, el usuario debe haberse registrado previamente; de lo contrario, se le negará el acceso.

## Registrar un Usuario
La aplicación debe permitir el registro de nuevos usuarios para que sus comentarios puedan ser identificados en las publicaciones. Los datos solicitados en el registro son:
- Registro académico
- Nombres
- Apellidos
- Contraseña
- Correo electrónico

Una vez completado el registro, el usuario será redirigido a la página principal para iniciar sesión.

## ¿Olvidó contraseña?
Si un usuario olvida su contraseña, la aplicación debe permitir el restablecimiento de la misma desde la pantalla principal. Para ello, se solicitarán los siguientes datos:
- Registro académico
- Correo electrónico

Si los datos coinciden, el usuario podrá registrar una nueva contraseña; de lo contrario, se le indicará que los datos son incorrectos.

## Pantalla Inicial
La pantalla inicial es la más importante de la aplicación, mostrando todas las publicaciones almacenadas en la base de datos. Estas se ordenarán por fecha de creación, mostrando primero las más recientes.

### Filtros disponibles:
- Filtrar por Curso.
- Filtrar por Catedrático.
- Filtrar por Nombre de Curso (solicitando el nombre previamente).
- Filtrar por Nombre de Catedrático (solicitando el nombre previamente).

## Crear Publicación
Esta pantalla permite a los usuarios logeados alimentar la base de datos mediante publicaciones sobre un Catedrático o un Curso. Deben seleccionar un dato específico antes de realizar la publicación.

### Información mínima requerida:
- Usuario que realizó la publicación
- Curso o Catedrático al que se refiere la publicación
- Mensaje de la publicación
- Fecha de creación

## Funciones dentro de la Aplicación

### Comentarios de una publicación
Cada publicación puede tener sus propios comentarios para que los usuarios logeados aporten más información. Esto permite acceder a diversas opiniones durante una búsqueda.

### Ver Perfil
Los usuarios pueden acceder a los perfiles de otros usuarios para ver su información personal mediante un buscador en la pantalla inicial. Al ingresar el número de Registro Personal:
- Si el usuario existe, se redirige a su perfil.
- Si no existe, se muestra un error.

Cada usuario puede acceder a su propio perfil con la opción de modificar sus datos personales, excepto el número de Registro Personal.

### Cursos Aprobados
Esta función varía según el usuario que visite el perfil:
- **Si visito el perfil de otro usuario:** Se muestra una página con los cursos aprobados y el total de créditos acumulados.
- **Si visito mi perfil:** Se muestra la misma información con la opción adicional de agregar cursos aprobados. El usuario es el encargado de administrar sus cursos aprobados.