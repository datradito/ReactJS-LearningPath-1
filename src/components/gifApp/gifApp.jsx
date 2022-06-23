import '../../styles/gifApp.css';
import { useState } from 'react';
import AddCategory from './AddCategory';
export default function GifApp() {
    const [categories, setCategories] = useState(['Prueba', 'Prueba2', 'Prueba3']);
    const [inputCategory, setInputCategory] = useState('');
   
    function handleCategoryAdd() {
        setCategories([...categories, inputCategory])
    }
    
    return (
        <>
            <section>
                <h2>Trabajo de la sección 6</h2>
                <h3>Gif browser</h3>
            </section>
            <section>
                <AddCategory></AddCategory>
                <button type="button" onClick={handleCategoryAdd}>Agregar categoría</button>
            </section>
            <section>
                <ol>
                    {categories.map(category => {
                        return <li key={category + Math.floor(Math.random()*10) + Math.floor(Math.random()*234)}>{category}</li>
                    })
                    }
                </ol>
            </section>
        </>
    )
}