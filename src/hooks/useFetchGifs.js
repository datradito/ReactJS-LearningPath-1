import { useEffect, useState } from 'react';
import { GetGifs } from '../utils/getGifs';

export default function useFetchGifs( category ) {
    const [foundGifs, setFoundGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newGifs = await GetGifs( category );
        setFoundGifs(newGifs);
        setIsLoading(false);
    }
    useEffect( () => {
        getImages();
    }, [category]);

   return {
    foundGifs,
    isLoading
   }
}