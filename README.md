# Test de ORM


Steps

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

Config
- Esta configurado para que siempre borre el schema y corra las migraciones iniciales para cargar datos y algunos cargos
- Para cambiarlo en `data-source.ts` set  `dropSchema: false`,
- En la carpeta json deja un archivo cargosFake.json con la salida de un `findAndCount()`
