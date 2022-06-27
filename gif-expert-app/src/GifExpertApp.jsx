import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
     const [categories, setCategories] = useState(['One punch', 'dragon Ball']);
     
     const onAddCategory = ()  =>{
        //categories.push('Valorant);
        setCategories(['Valorant',...categories ]);
        //setCategories( cat => [...cat, 'Valorant']);
     }




    return (
        <>
        {/*titulo*/}
            <h1>GifExpertApp</h1>
         {/*Input*/}
         <AddCategory />
         
        
         

          {/*listado de gif*/}
          <button onClick= { onAddCategory }>Agregar</button>
          <ol>
            { categories.map( category => {
              return   <li key={ category }>{category}</li>
            }) 
            }
          </ol>



           {/*gif item*/}
        
        
        
        
        
        </>

    )
}