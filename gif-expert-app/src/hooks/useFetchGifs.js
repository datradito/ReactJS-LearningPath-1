import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading,SetIsLoading] = useState ( true );

     const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
        SetIsLoading(false);
     }
    
   //tomar lo definido anteriormente
    useEffect( () => {
        getGifs(category);
        getImages();

}, []);


  return {
      images,
      isLoading

  }

}
