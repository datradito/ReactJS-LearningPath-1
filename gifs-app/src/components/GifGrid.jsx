// import React, { useState, useEffect } from "react";
import React from "react";
// import getGif from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);
  /* const [images, setImages] = useState([]);
  useEffect(() => {
    getGif(category).then(setImages);
  }, []) */
  return (
    <>
    <h3>{ category }</h3>
    { loading && <p /* className="animate__animated animate__wobble" */>LOADING</p> }
    <div className="card-grid">
      {
        images.map((img) => (
            <GifGridItem key={ img.id } { ...img } />
        ))
      }
    </div>
    {/* { loading ? '...loading...' : 'fin de carrgas' } */}
    {/* <div className="GifGrid">
      { images.map(img => (
          <GifGridItem key={ img.id } img={ img } />
      ))}
    </div> */}
    </>
  )
}
