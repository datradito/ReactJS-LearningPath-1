//Introduccion a las pruebas en jest

describe('Prueba en <DemoComponent />',() => {
        
    test('Esta prueba no debe de fallar', () => {
    //1. Inicialización

    const mensaje1 =  'Hola Mundo 1';

    //2. Estmulo

    const mensaje2 =  mensaje1.trim();

    //3. Observar el comportamiento... esperando

    expect(mensaje1).toBe(mensaje2) //esto es lo que se espera como resultado
    });

})

