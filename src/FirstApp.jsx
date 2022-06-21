
import PropTypes from 'prop-types';

export const FirstApp = ({

    title,
    subtitle,
    name,
    valor
}) => {

    //if(!title) {throw new Error('el titulo no anda')};

    //console.log(title);
    return (
        <>
            <h1> {title} </h1>
            <h2> {subtitle} </h2>
            <h3>{ valor }</h3>
            <p>{ name }</p>

            <button onClick={ function(event) {console.log(event)} }>
                +1               
            </button>

        </>
    )
}

FirstApp.propTypes = {

    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
    valor: PropTypes.number.isRequired
};

FirstApp.defaultProps = {

    title: 'no hay titulo',
    subtitle: 'no hay subtitulo',
    name: "begoña",
    valor: 1
}

/*
export const FirstApp = ({ title }) => {

    console.log(props);


    return (
        <>
            <h1>
                Begoña
            </h1>
            {title}
            <p>soy un subtitulo</p>
        </>
    )
}

/*const getResult=(a,b)=>{
    return a+b;
}



const newMessage ={
    
    message:'hola mundo',
    title: 'begoña'
};

export const FirstApp = () => {

 
    
    return (
        //fragmento,agrupador elemento html
        //nodo padre
        <>
        <h1>{getResult(1,5)}</h1>{
        <code>{ JSON.stringify(newMessage)  }</code>

    <p>Soy un subtitulo</p>}
        </>
    )
};
*/