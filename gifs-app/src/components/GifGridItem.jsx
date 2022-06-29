import React from "react";

export const GifGridItem = ({ title, url }) => {
    return(
        <div className="GifGridItem ">
            <img src={ url } alt={ title }  />
            <p id="url">{ title }</p>
        </div>
    )
}
