import PropTypes from 'prop-types';
// las importo para definirle el tipo a las properties, previamente descargo la dependencia (npm install prop-types);

export const FirstApp = ({ title, subtitle, name  }) => {
    //console.log(title);
    //trabajamos con el condicional, 
   {/* if (!title) {
        throw new Error ('el title no existe');
    } */}
  return (
    <>
    <h1>{ title }</h1>
    <h2>{name}</h2>
    <p>{subtitle }</p>
    </>
  )
}
//PROPTYPES DEFINIDOS en main: escribo los valores requeridos
FirstApp.PropTypes = {
title: PropTypes.string.isRequired,
subtitle: PropTypes.number.isRequired
}

{/**caso de utilizacion de numeros:  <p>{subtitle + 1}</p> y en el main  :subtitle = {1233}
 */}

 //tambien podremos definir las propiedades en un objeto: nota: se colocan al final

FirstApp.defaultProps = {
    name:'daiana herrera',
    subtitle: 'no hay sub titulo',
    title: 'no hay titulo',
}