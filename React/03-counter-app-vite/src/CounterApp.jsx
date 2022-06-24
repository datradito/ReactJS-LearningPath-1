import PropTypes from 'prop-types';
//importo hook - comienza con use y es una funcion especial
import { useState } from 'react';

export const CounterApp = ({ value }) => {
    //defino la funcionv flecha con nombre handleAdd que realiza la operacion
    {/*dentro de la funcion en el video anterior:
     console.log('+1');
    //cambio en el estado:
    value = 1000 */}

    const [counter, setCounter] = useState(value);
    //una vez que esta definido el hook, sigo utolizando las variables, y crear nuevas funciones con distintos tipos de funcionalidades.

    const handleAdd = () => {
        setCounter(counter + 1);
        //otra forma: setCounter((c)=> c +1);
    }
    const handleSustract = () => {
        setCounter(counter - 1);
        //otra forma: setCounter((c)=> c +1);
    }
    const handleReset = () => {
        setCounter(counter - counter);
        //otra forma: setCounter((c)=> c +1);
    }

    return (
        <><h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSustract }>-1</button>
            <button aria-label='btn-reset' onClick={ handleReset }>Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
