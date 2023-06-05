# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d significa **detached**

- MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/entriesdb
```

* Reconstruir los módulos de node y levantar Next
```
npm i
npm run dev
```

## Configurar variables de entorno

Renombrar el archivo **.env.template** a **.env**

## Llenar la DB con información de pruebas

Llamar a:

```
http://localhost:3000/api/seed
```
