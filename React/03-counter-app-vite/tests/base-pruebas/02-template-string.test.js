import { getSaludo } from '../../src/base-pruebas/02-template-string';

//atajo escribir des tab-->
describe('Pruebas en 02- template-string', () => {
     test('getSaludo debe retornar "Hola Fernando"', () => { 
        
          const name ='Fernando';
          const message = getSaludo( name );

          expect ( message ).toBe(`Hola ${( name )}`)
       });
    });