import { useState } from 'react';

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
                <h2>Contador de clicks</h2>
                <div>
                    <p>Usted ha clickeado el botón: {click} veces</p>
                    <button onClick={handleAddClick}>Click aquí</button>
                    <button onClick={handleRestartCounter}>Restaurar contador</button>
                </div>
            </section>
        </>
    )
}