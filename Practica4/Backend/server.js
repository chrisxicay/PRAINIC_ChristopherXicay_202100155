require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/database');

// Inicializar Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Probar conexión a la base de datos
db.authenticate()
  .then(() => console.log('Conexión a MySQL exitosa'))
  .catch(err => console.log(' Error en la conexión a MySQL:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Iniciar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(` Servidor corriendo en http://localhost:${PORT}`);
});
