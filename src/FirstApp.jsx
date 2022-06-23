
import PropTypes from 'prop-types';

export const FirstApp = ({

    title,
    subTitle,
    name,
    valor
}) => {

    //if(!title) {throw new Error('el titulo no anda')};

    //console.log(title);
    return (
        <>
            <h1 data-testid="test-title"> {title} </h1>
            <p> {subTitle} </p>
            <p> {subTitle} </p>
            <p>{valor}</p>
            <p>{name}</p>

            <button onClick={function (event) { console.log(event) }}>
                +1
            </button>

        </>
    )
}

FirstApp.propTypes = {

    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired
};

FirstApp.defaultProps = {

    /* cancelado en clase 61 para testing 
     title: 'no hay titulo',*/
    subTitle: 'soy un subtitulo',
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