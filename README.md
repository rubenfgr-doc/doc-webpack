## Instalación

1. Instalar NodeJS y NPM
2. Instalar Webpack

   ```sh
   npm init -y
   npm i --save-dev webpack webpack-cli
   ```

## Construir

- Generar el bundle con webpack

  ```sh
  node ./node_modules/webpack/bin/webpack.js --mode development | production
   # or
   npx webpack --mode development | production
  ```

- Empaquetar con el fichero de Configuración

```sh
npx webpack --config ./webpack.config.js  --mode development | production
```

## Variables de entorno

```sh
npx webpack -- --env outputFilename=TeSt
```
