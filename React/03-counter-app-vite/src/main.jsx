import React from 'react';
import ReactDOM from 'react-dom/client';


// creo la funcion para poder despues renderizarla.
import MiNombre from './MiNombre';


ReactDOM.createRoot(document.getElementById('root') ).render(
    //primero renderizo react y luego mi funcion.
    //utilizo el modo estricto para que me marque tdos los errores
    //al renderizar dentro la funcion utilizo en un solo llamado < />,

    <React.StrictMode>
      <MiNombre/>
    </React.StrictMode>
);