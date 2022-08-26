# Lab 003
    
* Este laboratorio trada de crear.
* Crear la red.
    1. Listar la red.
        docker network ls

    2. Crear la red
        docker network create --attachable lab08  

    3. Inspeccionar la red.
        docker network inspect lab08

* Crear el contenedor con mongo.
    1. Crear el contenedor de mongo.
        docker run -d --name dbm mongo
        
    2. Conectar el contenedor con  
        docker network connect lab08 dbm
    
    3. Crear el contenedor de la app
        docker run -d --name app -p 3000:3000 --env MONGO_URL=mongodb://dbm:27017/test lab08:v1.0

    4. Conectar el app a la red para que pueda ver el otro contenedor.
        docker network connect lab08 app

* Probar la app
* http://localhost:3000

    
    
    
    
    
