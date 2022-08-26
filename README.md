# Labs 
* Crear una imagen de docker para conectar servicios.

## Comandos Lab 01
    docker build -t lab08:v1.0 .
    docker run --rm -p 3000:3000 lab08:v1.0

* Correr el contenedor para que vea los cambios realizados, sin tener que compilar nuevamente la       imagen nuevamente.
    docker run  --rm -p 3000:3000 -v $PWD/index.js:/usr/src/index.js lab08:v1.0