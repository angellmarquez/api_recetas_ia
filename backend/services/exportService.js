// services/exportService.js
const axios = require('axios');
require('dotenv').config();

async function exportarReceta(receta, id_usuario) {
  const payload = {
    id_usuario,
    titulo: receta.titulo,
    descripcion: JSON.stringify(receta)
  };
  const response = await axios.post(process.env.BACKEND_URL, payload);
  return response.data;
}

module.exports = { exportarReceta };
