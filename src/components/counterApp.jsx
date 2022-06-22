import { useState } from 'react';
import '../styles/counterApp.css';

export default function Counter() {
    const [click, setClick] = useState(0);
    const handleAddClick = () => {
        setClick(click + 1)
    }
    const handleRestartCounter = () => {
        setClick(0);
    }
    return (
        <>
            <section>
                <h2>Trabajo de la sección 4</h2>
                <h3>Contador de clicks</h3>
                <div id='counterButtons'>
                    <p>Usted ha clickeado el botón: <span> {click} </span> veces</p>
                    <button onClick={handleAddClick}>Click aquí</button>
                    <button onClick={handleRestartCounter}>Restaurar contador</button>
                </div>
            </section>
        </>
    )
}