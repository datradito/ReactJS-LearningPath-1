//import { useState } from "react";

export function Counter() {
    //const [click, setClick] = useState(0);
    let click = 0;
    function setClick(i){
        click = i;
    }
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
                    <p>Usted ha clickeado el botón: <span>{click}</span> veces</p>
                    <button onClick={handleAddClick}>Click aquí</button>
                    <button onClick={handleRestartCounter}>Restaurar contador</button>
                </div>
            </section>
        </>
    )
}