const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para servir el formulario
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ejercicio3.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
