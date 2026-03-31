# Railway deployment instructions

## Backend (API)

1. Ve a https://railway.app y crea un nuevo proyecto.
2. Conecta tu repositorio de GitHub (api_recetas_ia).
3. Railway detectará automáticamente el backend (Node.js) por el archivo `Procfile` y `backend/server.js`.
4. Configura las variables de entorno en Railway:
   - `PORT` (Railway la asigna automáticamente, pero puedes definirla si lo necesitas)
   - `DATABASE_URL` (usa la URL que te da Railway al crear la base de datos PostgreSQL)
   - `groq_api_key` (tu clave de Groq)
   - `BACKEND_URL` (si tu API necesita comunicarse con otro backend)
5. Añade un plugin de PostgreSQL en Railway y copia la URL en `DATABASE_URL`.
6. Haz deploy. Railway instalará dependencias y ejecutará `node backend/server.js`.

## Frontend

- Puedes subirlo a Railway como servicio estático o usar Vercel/Netlify.
- Si quieres servir el frontend desde el backend, copia la carpeta `frontend/dist` al backend y sirve los archivos estáticos con Express.

---

**¡Listo! Tu API estará disponible en la URL pública que te da Railway.**
