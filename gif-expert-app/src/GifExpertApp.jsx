import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch']);

  const onAddCategory = (newCategory) => {
    //console.log(newCategory);
    // categories.push( newCategory);
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    //setCategories( cat => [...cat, 'Valorant']);
  }


  return (
    <>
      {/*titulo*/}
      <h1>GifExpertApp</h1>
      {/*Input*/}
      <AddCategory
        //setCategories= { setCategories }
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/*listado de gif*/}
      
        {
        categories.map(category =>(
         <GifGrid 
         key={ category }
         category={ category }/>))
          }
      
      {/*gif item*/}
    </>

  )
}