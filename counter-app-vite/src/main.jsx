//importamos react 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from "./FirstApp";
import { CounterApp } from './CounterApp';

import './styles.css';




//creamos el root al que le vamos a agregar el texto.
/* ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp/>
    </React.StrictMode>
) */



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*  <FirstApp/>  */}
         <CounterApp/>

    </React.StrictMode>
)