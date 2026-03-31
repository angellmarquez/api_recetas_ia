// services/iaService.js
const axios = require('axios');
require('dotenv').config();

async function generarReceta(prompt) {
  const response = await axios.post(
    'https://api.groq.com/openai/v1/chat/completions',
    {
      model: 'llama-3-70b-8192',
      messages: [
        { role: 'system', content: 'Eres un chef experto en recetas.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 1024
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.groq_api_key}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return response.data.choices[0].message.content;
}

module.exports = { generarReceta };
