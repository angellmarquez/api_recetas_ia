// models/receta.js
const pool = require('../db');

const Receta = {
  async crear(data) {
    const {
      titulo,
      historia,
      ingredientes,
      pasos,
      dificultad,
      calorias,
      tags,
      consejo_chef
    } = data;
    const res = await pool.query(
      `INSERT INTO recetas (titulo, historia, ingredientes, pasos, dificultad, calorias, tags, consejo_chef)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
      [titulo, historia, ingredientes, pasos, dificultad, calorias, tags, consejo_chef]
    );
    return res.rows[0];
  },

  async listar() {
    const res = await pool.query('SELECT * FROM recetas ORDER BY id DESC');
    return res.rows;
  },

  async buscarPorId(id) {
    const res = await pool.query('SELECT * FROM recetas WHERE id = $1', [id]);
    return res.rows[0];
  }
};

module.exports = Receta;
