import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid} from './components';


export const GifExpertApp = () =>{

    // lo inicializamos como un array 
    const [categories, setCategories ] = useState(['Chihiro'])

    const onAddCategory = ( newCategory ) => {

        if(categories.includes(newCategory)){
            return
        }



        // hacemos una copia de categorias con la destructuración [...categories]
        setCategories([ newCategory, ...categories])
       // setCategories(cat => [...cat, 'Valorant'])

    }

    return (
        <>
            {/* titulo */}
            <h1>Gif Expert App</h1>
            {/* input  en un componenete diferente*/}
            <AddCategory 
                //setCategories = { setCategories }
                onNewCategory ={event => onAddCategory(event)}
            />
            {/* listado de gifs. desntro de ese listado tenemos un Gif item*/}

            {
                categories.map(category => (<GifGrid key={category} category={category}/>))
            }
           

        </>
    )
}