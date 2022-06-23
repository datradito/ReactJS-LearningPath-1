import { useState } from 'react';
import PropTypes from 'prop-types'; //para limitar el tipo de props que pueden recibirse

export const Homepage = ({title, subtitle}) => {

  return (
    <>
        <header>
            <h1>Te doy la bienvenida</h1>
            <p> {title} </p>
            <p> {subtitle} </p>
        </header>    
    </>
  )
}
Homepage.propTypes = {
    title: PropTypes.string,
}
Homepage.defaultProps = {
    title: 'Default subtitle: Defina un título',
    subtitle: 'Default subtitle: Defina un subtítulo',
}


//dentro de la funcion que estructura el componente no van constantes o funciones que sólo requieran ser usadas 1 vez. las de us global van adentro, las otras van afuera.
//en el nodo padre que envuelve a todo l return del componente pueden ponerse los tags vacíos, <> </>