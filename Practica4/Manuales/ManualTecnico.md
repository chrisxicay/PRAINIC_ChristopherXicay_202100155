# Manual Técnico del Servidor
Autor: Christopher Emanuel Xicay Gómez - 202100155
Fernando Andhre Gonzalez Espinoza - 202202055

## 1. Introducción
Este documento describe la arquitectura, configuración y funcionalidades del servidor backend de la API REST utilizada en el proyecto.

## 2. Arquitectura del Servidor
- **Lenguaje de Programación:** Node.js
- **Framework:** Express.js
- **Base de Datos:** MySQL
- **Manejo de Variables de Entorno:** Dotenv
- **Autenticación:** JSON Web Tokens (JWT)

## 3. Instalación y Configuración

### 3.1. Requisitos Previos
- Node.js instalado
- MySQL instalado y configurado
- Archivo `.env` con variables de entorno configuradas

### 3.2. Instalación de Dependencias
Ejecutar el siguiente comando en la terminal:

```sh
npm install
```

### 3.3. Configuración del Archivo `.env`
Ejemplo de configuración:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=nombre_base_datos
JWT_SECRET=clave_secreta
```

## 4. Descripción de los Endpoints

### 4.1. Autenticación

#### **Registro de Usuario**
**POST /api/auth/register**
- **Entrada:** `{ nombre, apellido, correo, contraseña, num_registro }`
- **Salida:** `Mensaje de confirmación o error`

## **Imagen 1**
![Descripción de la imagen 1](/imaganes/1.jpg)

#### **Inicio de Sesión**
**POST /api/auth/login**
- **Entrada:** `{ correo, contraseña }`
- **Salida:** `{ token }` si las credenciales son correctas

#### **Recuperación de Contraseña**
**POST /api/auth/recover**
- **Entrada:** `{ correo, num_registro }`
- **Salida:** `Instrucciones de recuperación`

### 4.2. Publicaciones

#### **Obtener Publicaciones**
**GET /api/posts**
- **Parámetros Opcionales:** `curso, catedrático`
- **Salida:** `Lista de publicaciones ordenadas por fecha`

#### **Crear Publicación**
**POST /api/posts**
- **Autenticación Requerida**
- **Entrada:** `{ titulo, contenido, curso, catedrático }`
- **Salida:** `Confirmación de creación`

### 4.3. Perfiles de Usuario

#### **Ver Perfil**
**GET /api/users/:id**
- **Salida:** `Datos del usuario`

#### **Actualizar Perfil**
**PUT /api/users/:id**
- **Autenticación Requerida**
- **Entrada:** `{ nombre, apellido, correo, contraseña }`
- **Salida:** `Mensaje de confirmación`

## 5. Manejo de Errores
El servidor devuelve respuestas estandarizadas con códigos HTTP:

- `200 OK`: Petición exitosa
- `400 Bad Request`: Datos de entrada incorrectos
- `401 Unauthorized`: Falta autenticación
- `403 Forbidden`: Acceso denegado
- `500 Internal Server Error`: Error del servidor

## 6. Seguridad
- Uso de `bcrypt` para el hash de contraseñas
- Autenticación con JWT
- Variables de entorno para datos sensibles

## 7. Despliegue
- **Servidor de Producción:** Configurado con PM2
- **Base de Datos:** Asegurada con usuario restringido y copias de seguridad periódicas

## 8. Conclusión
Este manual describe la implementación del servidor backend, sus endpoints, manejo de autenticación y configuración. Para cualquier modificación, seguir las mejores prácticas de desarrollo y seguridad.

