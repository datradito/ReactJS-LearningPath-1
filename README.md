# ReactJS-LearningPath-1
Accenture Learning Path for FS/FE Tribe
para iniciar el proyecto:
npm create-vite
nombre: nombredelproyecto
(en este caso : gif-expert-app)
>react
luego entro a la carpeta por la terminal:
cd gif-expert-app

para instalarlo: 
npm install
para correrlo:
npm run dev
ctrl+c = salir
......................................
el proyecto debe contener las dependencias:
proptypes, vite.

como instalar prop types, desde la terminal, dentro de la carpeta -> ejecutar:
 npm install prop-types

 El componente en uso es FiRstApp.jsx en main.jsx.

como instalar prop types, desde la terminal, dentro de la carpeta -> ejecutar:
 npm install prop-types
 npm install --save-dev jest

 para correrlo: npm run test

 en pkg-json: 
  "scripts": {
    "test": "jest --watchAll" // menu jest en terminal
  }
  -->para instalar dependencia de desarrollo para ayudar con la sintaxis:

  npm add -D @types/jest

  -->dependencia para babel
  npm install --save-dev babel-jest @babel/core @babel/preset-env
  luego crear archivo: 
  babel.config.js
   y llenar con el codigo 
  module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

- (crear un API key con GHIPY.)
----
*crear archivo en directorio:
jest.config.js
*grabar este codigo:
module.exports = {
   //TODO: jsdom,
   setupFiles: ['./jest.setup.js']
}
-->luego crear el archivo:
jest.setup.js 
y dentro codear:
import 'whatwg-fetch';

--> en terminal para instalar la dependencia:
npm add -D whatwg-fetch

--> instalar en terminal:
npm install --save-dev @testing-library/react
--> tambien:
npm install --save-dev react-test-renderer
-->npm add -D @babel/preset-react
--> además:
npm add -D jest-environment-jsdom
-> configurarlo en el archivo jes.config.js : 
 testEnvironment: 'jest-environment-jsdom',
 y en el archivo babelconfig cambiar el codigo a: 



 