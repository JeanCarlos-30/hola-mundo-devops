#  Hola Mundo App — Ciclo DevOps Completo

**Autor:** jeacarlos3015  
**Stack:** Node.js + Express + Docker

---

##  Estructura del Proyecto

```
hola-mundo-app/
├── public/
│   └── index.html       ← Frontend visual
├── server.js            ← Servidor Express
├── package.json         ← Dependencias Node
├── Dockerfile           ← Instrucciones imagen Docker
├── .dockerignore        ← Archivos excluidos del build
└── .gitignore
```

---

## 🖥️ COMANDOS — Terminal de VS Code

### 1️⃣ Instalar dependencias localmente
```bash
npm install
```

### 2️⃣ Probar la app localmente (sin Docker)
```bash
node server.js
# Abrir: http://localhost:3000
```

### 3️⃣ Construir la imagen Docker
```bash
docker build -t jeacarlos3015/hola-mundo-app:latest .
```

### 4️⃣ Verificar que la imagen se creó
```bash
docker images
```

### 5️⃣ Correr el contenedor localmente
```bash
docker run -d -p 3000:3000 --name hola-mundo jeacarlos3015/hola-mundo-app:latest
# Abrir: http://localhost:3000
```

### 6️⃣ Ver contenedores activos
```bash
docker ps
```

### 7️⃣ Ver logs del contenedor
```bash
docker logs hola-mundo
```

### 8️⃣ Detener el contenedor
```bash
docker stop hola-mundo
```

### 9️⃣ Login en Docker Hub
```bash
docker login
# Usuario: jeacarlos3015
# Password: (tu contraseña)
```

### 🔟 Subir imagen a Docker Hub
```bash
docker push jeacarlos3015/hola-mundo-app:latest
```

### 1️⃣1️⃣ Verificar en Docker Hub
```
https://hub.docker.com/r/jeacarlos3015/hola-mundo-app
```

---

##  Limpiar contenedor e imagen (opcional)
```bash
docker rm hola-mundo
docker rmi jeacarlos3015/hola-mundo-app:latest
```

---

##  Endpoints disponibles
| Ruta | Descripción |
|------|-------------|
| `GET /` | Página web principal |
| `GET /api/info` | JSON con info del contenedor |
