import { useState } from 'react';

import PropTypes from 'prop-types';



export const CounterApp = ({ valor }) => {

console.log('render');

    const [counter, setCounter] = useState(valor)

    const handleAdd = () => {
        //setCounter( counter + 1);
        setCounter( counter + 1)
    }

    const handleAddRestar = () => {
        //setCounter( counter - 1);
        setCounter( counter - 1)
    }

    const handleAddReset = () => {
        //setCounter( counter );
        setCounter( valor)
    }

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={ handleAdd
            }>
                +1
            </button>
            <button onClick={ handleAddRestar
            }>
                -1
            </button>
            <button onClick={ handleAddReset
            }>
                reset
            </button>


        </>
    );
}
CounterApp.propTypes = {

    valor: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
    valor: 1
}