# Lab 04
* Crear el archivo llamado docker-compose.yml
* Agregar el codigo, el siguiente codigo.
```
# Version del docker compose, siempre 
version: "3.8"

services:
  app:
    image: lab08:v1.0
    environment:
      MONGO_URL: "mongodb://db:27017/test"
    depends_on:
      - db
    ports:
      - "3000:3000"

  db:
    image: mongo
```

    
# Docker compose commad.
  1. Ejecuta el compose, crea los contenedores y ls levanta.  
    docker compose up -d

  2. Ver los logs que genera el contenedor del app 
    docker comose logs -f app

  3. Ingresar al contenedor del app
    docker compose exec app bash

  3. Ver los procesos de los contenedores  
    docker compose ps

  4. Baja los contenedores y los elimona
    docker compose down

# Probar la app
* http://localhost:3000
