import React from "react";
import { Fragment , useState} from "react";
import PropTypes from 'prop-types';




export const CounterApp = ({value}) => {

    const [counter, setCounter] =  useState(value);

    const  handleAdd = () =>  {
       
        setCounter(counter + 1 )

        if(counter > 10) {
            alert('Legaste a 10!')
        }
    
    }
    const  handleLess = () =>  {
       
        setCounter(counter - 1 )
    
    }
    const  handleReset= () =>  {
        setCounter(value)
    }

    return(
        <Fragment>
            <div className="container-counter">

                <h2>{counter}</h2>

                <button onClick={ handleAdd}>+</button>
                <button onClick={ handleLess}>-</button>
                <button onClick={ handleReset}>Reset</button>
            </div>
        </Fragment>
    )

}


CounterApp.propTypes = {

    value:  PropTypes.number.isRequired

}

CounterApp.defaultProps = {
    value:  0
}