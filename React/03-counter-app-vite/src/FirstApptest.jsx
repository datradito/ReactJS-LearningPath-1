
{/* caso 1: 
const newMessage = {
    fecha:'20 de junio',
    dia: 'Dia de la Bandera',


};
nota:
---->caso 1:   este elemento puedo usarlo completo en la funcion, utilizando {JSON.stringufy(nombredelelemento)}
----> caso 2: de utilizar una funcion que tiene un calculo, lo utilizo en la funcion principal, utilizando { getResult() }*/}

{/* caso 2:
const getResult = () => {
    return 4 + 4 ;

};
*/}
export const FirstApptest = () => {
    return (
        <>
         <h1>Daiana</h1>
          <p>Esto es un parrafo en un fragmento</p>
        </>

    )
}
  {/* caso 1:
            <code>{JSON.stringify(newMessage)}</code>*/} {/*esto es un comentario entre llaves y cierre*/}
            {/*caso 2:
            <h1>{ getResult() }</h1>*/}