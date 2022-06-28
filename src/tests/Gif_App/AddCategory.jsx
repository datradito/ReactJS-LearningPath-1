import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddCategory({handleNewCategory}) {
    const [inputCategory, setInputCategory] = useState('');
   
    function handleInput(e) {
        setInputCategory(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if ( inputCategory.trim().length <= 1 ) return;

        const newCategoryValue = inputCategory;
        handleNewCategory(newCategoryValue);
        setInputCategory('');
    }
    return (
        <form onSubmit={(e) => {handleSubmit(e)}} aria-label="form">
            <input onChange={handleInput} value={inputCategory} placeholder="Buscar gifs" type="text" name="searchBar" id="searchBar" />
        </form>
    )
}

AddCategory.propTypes = {
    handleNewCategory: PropTypes.func.isRequired
};