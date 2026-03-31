// routes/recetas.js
const express = require('express');
const Receta = require('../models/receta');
const { generarReceta } = require('../services/iaService');
const { exportarReceta } = require('../services/exportService');

const router = express.Router();

// POST /recetas/ia
router.post('/ia', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt requerido' });
    const recetaRaw = await generarReceta(prompt);
    // Aquí parsearías recetaRaw a un objeto con los campos esperados
    // Por simplicidad, asumimos que recetaRaw es un JSON válido
    let recetaObj;
    try {
      recetaObj = JSON.parse(recetaRaw);
    } catch {
      return res.status(500).json({ error: 'La IA no devolvió un JSON válido' });
    }
    const receta = await Receta.crear(recetaObj);
    res.json(receta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /recetas
router.get('/', async (req, res) => {
  const recetas = await Receta.listar();
  res.json(recetas);
});

// POST /recetas/exportar/:id
router.post('/exportar/:id', async (req, res) => {
  try {
    const { id_usuario } = req.body;
    if (!id_usuario) return res.status(400).json({ error: 'id_usuario requerido' });
    const receta = await Receta.buscarPorId(req.params.id);
    if (!receta) return res.status(404).json({ error: 'Receta no encontrada' });
    const resultado = await exportarReceta(receta, id_usuario);
    res.json(resultado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
