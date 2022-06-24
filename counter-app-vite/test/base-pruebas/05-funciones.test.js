import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones' , () => {

    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user =  getUser();

        console.log(user);

        // en estos casos se usa toEqual para comparar si son iguales
        expect( testUser ).toEqual( user );

    });


    test('getUsuarioActivo debe retornar un objeto ', () => {

        const name =  'Paloma';

        const userActivo =  getUsuarioActivo(name);

        const testUserActivo = {
            uid: 'ABC567',
            username: name
        }

        console.log(userActivo);

        expect(userActivo).toStrictEqual(testUserActivo)

    })

});






