#  Hola Mundo App — Ciclo DevOps Completo

**Autor:** Jean Cralos Terrero   
**Stack:** Node.js · Express · Docker · Docker Hub

---

## ¿Qué es este proyecto?

Una aplicación web sencilla que muestra una página "Hola Mundo". El objetivo es practicar el **ciclo completo de DevOps**:

> Escribir código → Empaquetar con Docker → Subir a Docker Hub

---

## 📁 Estructura del proyecto

```
hola-mundo-app/
├── public/
│   └── index.html     ← La página web que ve el usuario
├── server.js          ← El servidor Node.js con Express
├── package.json       ← Lista de dependencias del proyecto
├── Dockerfile         ← Instrucciones para crear la imagen Docker
└── .dockerignore      ← Archivos que Docker debe ignorar
```

---

## 🛠️ Tecnologías usadas

| Tecnología | ¿Para qué se usa? |
|---|---|
| **Node.js** | Ejecutar el servidor |
| **Express** | Manejar las rutas HTTP |
| **Docker** | Empaquetar la app en un contenedor |
| **Docker Hub** | Alojar la imagen en la nube |

---

## 🚀 Cómo correr el proyecto

### Opción A — Sin Docker (local)

```bash
# 1. Instalar dependencias
npm install

# 2. Arrancar el servidor
node server.js

# 3. Abrir en el navegador
http://localhost:3000
```

### Opción B — Con Docker

```bash
# 1. Construir la imagen
docker build -t jeacarlos3015/hola-mundo-app:latest .

# 2. Correr el contenedor
docker run -d -p 8080:3000 --name hola-mundo jeacarlos3015/hola-mundo-app:latest

# 3. Abrir en el navegador
http://localhost:8080
```

---

## 📤 Subir la imagen a Docker Hub

```bash
# 1. Iniciar sesión en Docker Hub
docker login

# 2. Subir la imagen
docker push jeacarlos3015/hola-mundo-app:latest
```

Ver imagen publicada:
```
https://hub.docker.com/r/jeacarlos3015/hola-mundo-app
```

---

## 🌐 Endpoints de la API

| Ruta | Descripción |
|---|---|
| `GET /` | Página web principal |
| `GET /api/info` | Info del contenedor en JSON |

---

## 🧹 Comandos útiles

```bash
# Ver contenedores activos
docker ps

# Ver logs del contenedor
docker logs hola-mundo

# Detener el contenedor
docker stop hola-mundo

# Eliminar el contenedor
docker rm hola-mundo

# Eliminar la imagen
docker rmi jeacarlos3015/hola-mundo-app:latest
```

---

## ✅ Ciclo DevOps completado

```
[1] Código escrito      →  Node.js + Express
[2] Imagen creada       →  docker build
[3] Contenedor corriendo →  docker run
[4] Imagen publicada    →  docker push → Docker Hub
```
