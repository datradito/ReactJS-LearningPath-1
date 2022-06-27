import React from 'react';
import '../../styles/gifApp.css';
import { useState } from 'react';

import AddCategory from './AddCategory';
import GifCategory from './GifCategory';

export default function GifApp() {
    const [categories, setCategories] = useState(['']);
   
    function handleCategoryAdd(newCategory) {
        //Category validation
        let uppercasenewCategory = newCategory.toLowerCase();
        uppercasenewCategory =  uppercasenewCategory.split(" ");
        for (var i = 0; i < uppercasenewCategory.length; i++) {
            uppercasenewCategory[i] = uppercasenewCategory[i].charAt(0).toUpperCase() + uppercasenewCategory[i].slice(1);
        }
        uppercasenewCategory = uppercasenewCategory.join(" ");

        if (categories.includes(uppercasenewCategory)) return;
        setCategories([uppercasenewCategory, ...categories])
    }
    
    return (
        <>
            <section>
                <h2>Trabajo de la sección 6</h2>
                <h3>Gif browser</h3>
            </section>
            
            <section>
                <AddCategory handleNewCategory={handleCategoryAdd}></AddCategory>
                
                {categories.map((category) => {
                    return <GifCategory category={category} />
                })
                }
                
            </section>
        </>
    )
}