test('Esta prueba no debe fallar', () => {
    /* if(0===1){
        throw new Error('No puede dividir entre cero');
    } */

    // 1. inicialización
    const msg1 = 'Hello World';
    // 2. estimulo
    const msg2 = 'Hello World';
    // 3. observar comportamiento
    //espero msg1 sea igual a msg2
    expect(msg1).toBe(msg2);

});