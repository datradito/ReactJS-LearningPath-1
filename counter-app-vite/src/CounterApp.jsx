import React from "react";
import { Fragment , useState} from "react";
import PropTypes from 'prop-types';




export const CounterApp = ({value}) => {

    const [counter, setCounter] =  useState(value);

    const  handleAdd = () =>  {
       
        setCounter(counter + 1 )

       /*  if(counter > 10) {
            alert('Legaste a 10!')
        } */
    
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

                <button  aria-label="btn-suma" onClick={ handleAdd}>+</button>
                <button aria-label="btn-resta" onClick={ handleLess}>-</button>
                <button aria-label="btn-reset" onClick={ handleReset}>Reset</button>
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