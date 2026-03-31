import React, { useEffect, useState } from 'react';
import { getRecetas } from './services/api';
import './RecetasIA.css';

export default function RecetasIA() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRecetas()
      .then(setRecetas)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="cargando">Cargando recetas IA...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="recetas-ia-lista">
      <h2>Recetas Generadas por IA</h2>
      <div className="recetas-grid">
        {recetas.map(r => (
          <div className="receta-card" key={r.id}>
            <h3>{r.titulo}</h3>
            <p className="historia">{r.historia}</p>
            <div><b>Ingredientes:</b>
              <ul>{r.ingredientes?.split('\n').map((i, idx) => <li key={idx}>{i}</li>)}</ul>
            </div>
            <div><b>Pasos:</b>
              <ol>{r.pasos?.split('\n').map((p, idx) => <li key={idx}>{p}</li>)}</ol>
            </div>
            <div className="info-extra">
              <span>Dificultad: {r.dificultad}</span>
              <span>Calorías: {r.calorias}</span>
              <span>Tags: {r.tags}</span>
            </div>
            <div className="consejo-chef">{r.consejo_chef}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
