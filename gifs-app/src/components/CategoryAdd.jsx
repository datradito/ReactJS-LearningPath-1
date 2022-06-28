import React, { useState } from "react";
import PropTypes from 'prop-types';

export const CategoryAdd = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length !== 0){
            setCategories(cats => [inputValue, ...cats,]);
            setInputValue('');
        }
    }
  return (
    <div className="search">
      <form onSubmit={ handleSubmit }>
        <input type="text" value={ inputValue } onChange={ handleInputChange } placeholder="Looking for gifs" />
        <button><i className="fa-solid fa-magnifying-glass"></i></button> 
      </form>
    </div>
  )
}
CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired
}