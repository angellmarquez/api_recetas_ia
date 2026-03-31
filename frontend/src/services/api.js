// frontend/src/services/api.js
export async function getRecetas() {
  const res = await fetch('http://localhost:4000/recetas');
  if (!res.ok) throw new Error('Error al obtener recetas');
  return res.json();
}
