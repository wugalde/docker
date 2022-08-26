# Lab 05
* Modifica el docker compose para hacerlo mas eficiente.
* http://localhost:3000

# Docker build
    1. Usa el docker file para crear o actualizar la imagen
        docker compose  build

    2. Cambiar el tag a la imagen creada anterior mente
        docker tag f85303d70b6d lab08:v1.0
    
    3. Crea y levanta los contenedores.
        docker compose up -d