# Usar una imagen base de Node.js más reciente (Node.js 18)
FROM node:18 AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración del proyecto (package.json y package-lock.json)
COPY package.json package-lock.json ./

# Instalar las dependencias del proyecto
#RUN npm install
RUN npm install -g @angular/cli@16 && npm install

# Copiar el resto de los archivos del proyecto (incluyendo los archivos de entorno)
COPY . .

# Exponer el puerto 4200 (por defecto donde Angular sirve la app)
EXPOSE 4200

# Ejecutar el servidor de desarrollo Angular con la opción de abrir el navegador
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]




# Usar una imagen base de Node.js más reciente (Node.js 18)
#FROM node:18 AS build

# Establecer el directorio de trabajo dentro del contenedor
#WORKDIR /app

# Copiar los archivos de configuración del proyecto (package.json y package-lock.json)
#COPY package.json package-lock.json ./

# Instalar las dependencias del proyecto
#RUN npm install

# Copiar el resto de los archivos del proyecto (incluyendo los archivos de entorno)
#COPY . .

# Construir la aplicación Angular usando la configuración de producción
#RUN npm run build -- --configuration production

# Usar una imagen base de Nginx para servir la aplicación
#FROM nginx:alpine

# Copiar los archivos compilados de Angular al servidor Nginx
#COPY --from=build /app/dist/media-app /usr/share/nginx/html

# Exponer el puerto 80 (para producción)
#EXPOSE 80

# Comando para iniciar Nginx
#CMD ["nginx", "-g", "daemon off;"]


