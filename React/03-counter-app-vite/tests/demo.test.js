test('Pruebas en <DemoComponent/>', () => {

//1. Inicializacion
const message1 = 'Hola mundo';

//2. estímulo
const message2 = message1.trim();

//3. Observar el comportamiento...esperado
expect ( message1 ).toBe( message2 );


});