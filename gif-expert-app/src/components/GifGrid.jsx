import { getGifs } from "../helpers/getGifs";
import { useEffect,useState } from "react";

export const GifGrid =( { category }) => {
    //llamo a la Api a traves de una funcion, esta arriba.
    //utilizo el hook useEffect
    // agrego boton counter
     const [counter,setCounter] = useState(10);
    useEffect( () => {
        getGifs(category);

}, [])
   
    getGifs( category);

    return (
        <>
        <h3>{ category }</h3>

        <h5> { counter }</h5>
        <button onClick={ () => setCounter( counter + 1 )}>+1</button>
        </>
    )
}