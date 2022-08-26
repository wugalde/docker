# Lab 06
* Crear una imagen de docker para conectar servicios.
* http://localhost:3000

# Docker creando un docker override para trabajo en equipo y no cambiar el original 
    1. Crear al imagen con el tag que esta en el docker compose padre y no usar el nombre de la carpeta y el primer servicio.
        docker compose  build

    2. Crear los contenedores usando el servicio
        docker compose up -d

    3. Se agrega en el compose override la variable y luego levantamos los contenedores
        docker compose up -d
        docker compose exec app bash

    4. Excepciones
    * Los ports tienen problemas al definirlo en los dos docker compose.

    5. Escalar un servicio a mas de una instancia
        docker compse up -d --scale app=2

        * Para solucionar el error hay que definir un rango de puertos, en mi caso no levanto el primier contendor.
            ports:
                - "3000-3001:3000"
    6. Limitar el uso de memoria del procesador.
        docker run -d --name app --memory 1g lab08:v1.1
        
# Docker compose override Lab 09
    fig-docker-compose 