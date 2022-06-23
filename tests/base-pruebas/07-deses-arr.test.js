import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr.js"


describe('pruebas en 07-deses-arr', () => {


    test('debe retornar un string y un numero', () => {

        const  [letters, numbers] = retornaArreglo();
        
        expect(letters).toBe('ABC');

        expect (typeof letters).toBe('string')
        expect (typeof numbers).toBe('number')

        expect( letters).toEqual (expect.any(String));


    });
});