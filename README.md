# Lab 001
* Crear una imagen de docker para conectar servicios.
* http://localhost:3000

## Comandos Lab 02
    docker build -t lab08:v1.0 .
    docker run --rm -p 3000:3000 lab08:v1.0

* Correr el contenedor para que vea los cambios realizados
    docker run  --rm -p 3000:3000 -v $PWD/index.js:/usr/src/index.js lab08:v1.0


# docker y redes Lab 03
    docker network ls
    docker network create --attachable lab08  
    docker network inspect lab08

# Contenedores que usen la red Lab 04
    docker run -d --name dbm mongo
    docker network connect lab08 dbm
    docker run -d --name app -p 3000:3000 --env MONGO_URL=mongodb://dbm:27017/test lab08:v1.0
    docker network connect lab08 app
    
# Docker compose Lab 05
    docker compose up -d
    docker comose logs -f app
    docker compose exec app bash
    docker compose ps
    docker compose down


# Docker build Lab 08
    docker compose  build
    docker tag docker_app lab08:v1.0
    docker compose up -d

# Docker compose override Lab 09
    fig-docker-compose 