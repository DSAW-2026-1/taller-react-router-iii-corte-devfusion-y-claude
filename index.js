const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 🔹 Servir archivos estáticos (css, js, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// 🔹 Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 🔹 Levantar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/mihistorial', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'mihistorial.html'));
});

app.get('/vendedor', (req, res) => {
    res.sendFile(__dirname + '/views/vendedor.html');
});

app.get('/producto/:id', (req, res) => {
    res.sendFile(__dirname + '/views/producto.html');
});