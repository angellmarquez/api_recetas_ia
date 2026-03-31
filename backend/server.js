// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const recetasRouter = require('./routes/recetas');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/recetas', recetasRouter);

app.get('/', (req, res) => {
  res.send('API de Recetas IA funcionando');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
