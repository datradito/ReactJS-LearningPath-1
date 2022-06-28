import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe retornar un objecto', () => { 

        const testUSer = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        
        expect( testUSer ).toEqual( user );
     });

     test('getUsuarioActivo debe de retornar un objeto', () => { 
        const name = 'Jassira';
        const user = getUsuarioActivo ( name );
        
        expect ( user ).toEqual({
            uid: 'ABC567',
            username: name
        });

      });
 });