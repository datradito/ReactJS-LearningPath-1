import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('pruebas en 11-async-await.js', () => {

    test('getImagen debe retornar un error', async () => {

        const resp = await getImagen();
        //console.log(url);

        expect(resp).toBe('No se encontro la imagen');


    });


})

