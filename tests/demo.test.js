


/*test(' esta prueba no debe fallar',()=>{

    if(0===1) {

        throw new Error ('no puede dividir')
    }

})*/



test(' esta prueba no debe fallar',()=> {

//inciacion
const message1 ='hola mundo'; 

//estimulo
const message2 = message1.trim();

//observar comportamiento
expect(message1).toBe(message2);
});

