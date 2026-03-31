# api_recetas_ia

API Node.js para generar recetas con IA (Groq/Llama-3), almacenarlas en PostgreSQL y exponerlas para integración con otros sistemas y frontend.

## Estructura
- server.js (punto de entrada)
- .env (variables de entorno)
- db.js (conexión PostgreSQL)
- models/receta.js (modelo de receta)
- routes/recetas.js (rutas de la API)
- services/iaService.js (llama a Groq/Llama-3)
- services/exportService.js (exporta recetas al backend principal)
- frontend/ (React, listado de recetas)

## Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/api_recetas_ia.git
   cd api_recetas_ia
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Configura las variables en `.env`:
   - PORT
   - DATABASE_URL
   - groq_api_key
   - BACKEND_URL
4. Crea la tabla en PostgreSQL:
   ```sql
   CREATE TABLE recetas (
     id SERIAL PRIMARY KEY,
     titulo TEXT,
     historia TEXT,
     ingredientes TEXT,
     pasos TEXT,
     dificultad TEXT,
     calorias TEXT,
     tags TEXT,
     consejo_chef TEXT
   );
   ```
5. Inicia el backend:
   ```bash
   node server.js
   ```

## Endpoints principales
- `POST /recetas/ia` — Genera y almacena receta IA.
- `GET /recetas` — Lista todas las recetas IA (público).
- `POST /recetas/exportar/:id` — Exporta receta al backend principal.

## Frontend
1. Ve a la carpeta frontend y sigue las instrucciones para instalar y levantar el frontend React.
2. El frontend consume el endpoint `/recetas` y muestra todas las recetas generadas, usando el mismo diseño que el proyecto principal.

## Despliegue en Render
- Sube el proyecto a GitHub.
- En Render, crea un nuevo servicio web para el backend y otro para el frontend.
- Configura las variables de entorno en Render.

## Integración con el proyecto principal
- El backend principal puede consumir el endpoint público `/recetas` para mostrar recetas IA en la página de búsqueda.

---

Para dudas o mejoras, abre un issue o pull request.
