# Railway deployment instructions (Frontend)

## Frontend (React + Vite)

1. Ve a https://railway.app y entra a tu proyecto (o crea uno nuevo).
2. Haz clic en "New Service" y selecciona "Deploy from GitHub repo".
3. Elige el repositorio y selecciona la carpeta `frontend` como root del servicio.
4. Railway detectará Vite automáticamente.
5. Configura los siguientes comandos:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Si tu frontend necesita variables de entorno, agrégalas en Railway (por ejemplo, la URL del backend).
7. Haz deploy. Railway servirá el frontend como sitio estático.

---

**¡Listo! Tu frontend estará disponible en la URL pública que te da Railway.**
