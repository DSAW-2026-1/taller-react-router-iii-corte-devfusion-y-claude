const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();

app.use(express.json());

// probar conexión
sequelize.authenticate()
    .then(() => {
        console.log('✅ Conectado a MySQL correctamente');
    })
    .catch((error) => {
        console.error('❌ Error al conectar a MySQL:', error);
    });

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});
