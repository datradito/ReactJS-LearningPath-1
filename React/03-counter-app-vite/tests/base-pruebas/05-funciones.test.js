import { getUser } from '../../src/base-pruebas/05-funciones';
import {getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-Funciones', () => { 

   test('getUser debe de retornar un objeto', () => {
   
    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'

    }; 
    const User = getUser();
    console.log( User);

    expect( testUser ).toStrictEqual( User );



    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
        
        const name ='Fernando'; 

        const user = getUsuarioActivo( name );
            
        expect( user ).toStrictEqual({ 
            uid: 'ABC567',
            username: name
    
        });
    
    });
 });