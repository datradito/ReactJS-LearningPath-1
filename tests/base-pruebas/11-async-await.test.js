import {getImagen  } from '../../src/base-pruebas/11-async-await';

describe('pruebas en 11-async-await.js', () => {

    test('getImagen debe retornar un error si no hay api key', async () => {

        const url = await getImagen();
        console.log(url);

        //expect( typeof url).toBe('string');

        const resp = await getImagen();
        //console.log(url);

       // expect(resp).toBe('No ');


    }); 


})

