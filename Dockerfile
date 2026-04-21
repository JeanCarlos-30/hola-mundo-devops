# ── Etapa 1: imagen base ───────────────────────────────────────
FROM node:18-alpine

# Metadatos
LABEL maintainer="jeacarlos3015"
LABEL description="App Hola Mundo - Ciclo DevOps"
LABEL version="1.0.0"

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias primero (mejor uso de caché)
COPY package*.json ./

# Instalar dependencias de producción únicamente
RUN npm install --omit=dev

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto que usa la app
EXPOSE 10000

# Variable de entorno por defecto
ENV NODE_ENV=production
ENV PORT=10000

# Comando para arrancar la aplicación
CMD ["node", "server.js"]