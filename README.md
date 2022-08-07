# backend-example-nest-postgresql-docker

### How run for development:

1. Start backend server:
   1.1 Go to the server folder
   1.2 Run start:dev. Server will start on 5000 port by default. *Port can be overriden in .development.env*

2. Swagger is available by url: localhost:5000/api/docs

3. For the connection to the database need to make next steps:
   3.1: Create database with name: nest-course
   3.2: Credentials should be next: username - *postgres*, password - *root*
   3.3. Port should be 5432
   3.4. *If you wanna change database parameters you can change it in .development.env*

### Used technologies

* Nest Js (Backend)
* Postgresql
* Swagger
* REST

### Diagrams

# User role diagram

![User Role Diagram](/helpers/pictures/User%20role%20diagram.png)
