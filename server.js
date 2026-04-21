const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/info', (req, res) => {
  res.json({
    mensaje: '¡Hola Mundo desde la API!',
    version: '1.0.0',
    autor: 'jeacarlos3015',
    tecnologia: 'Node.js + Express',
    contenedor: process.env.HOSTNAME || 'local',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📦 Contenedor ID: ${process.env.HOSTNAME || 'local'}`);
});