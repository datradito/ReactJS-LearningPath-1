import React, { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const  [inputValue, setInputValue] = useState();

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        //para que no se recargue la pagina
        event.preventDefault();
        //verificamos si el inputValue es menor a 1, si lo es no agrega nada
        if(inputValue.trim().length < 1){
            return
        }
        //setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        //vaciamos el inputValue
        setInputValue('')
    }

    return(
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text" 
                placeholder="Buscar GIF" 
                value={inputValue}
                onChange= { (event) => onInputChange(event) }

            />
        </form>
       
    )
}