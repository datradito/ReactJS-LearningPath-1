
{/*const newMessage = {
    fecha:'20 de junio',
    dia: 'Dia de la Bandera',


};*/}

const getResult = () => {
    return 4 + 4 ;

};

export default function MiNombre() {
    return (
        <>
        <h1>{ getResult() }</h1>
        {/*<code>{JSON.stringify(newMessage)}</code>*/} {/*esto es un comentario entre llaves y cierre*/}
        <p>Esto es un parrafo en un fragmento</p>
        </>
      
    )
  }