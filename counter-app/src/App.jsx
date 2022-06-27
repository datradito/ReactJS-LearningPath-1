import { useState } from 'react';
import PropTypes from 'prop-types';
//import './App.css';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value)
  
  return (
    <div className="App">
      <h1>Counter: <span>{ counter }</span></h1>
      <div>
        <button onClick={ () => setCounter(counter +1) }>+ 1</button>
        <button onClick={ () => setCounter(value) }>Reset</button>
        <button onClick={ () => setCounter(counter -1) }>- 1</button>
      </div>
    </div>
  )
}


CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
