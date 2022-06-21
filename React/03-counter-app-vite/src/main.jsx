import React from 'react';
import ReactDOM from 'react-dom/client';
//importo el css de estilos globales.
import './styles.css';

// creo la funcion para poder despues renderizarla.
//import FirstApp from './FirstApptest';
//import { FirstApp } from './FirstApp'; // una funcion la importo con llaves.
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root') ).render(
    //primero renderizo react y luego mi funcion.
    //utilizo el modo estricto para que me marque tdos los errores
    //al renderizar dentro la funcion utilizo en un solo llamado < />,
    //es el padre de mi first App-
    <React.StrictMode> 
      <CounterApp value={ 0 }/>
    </React.StrictMode>
);