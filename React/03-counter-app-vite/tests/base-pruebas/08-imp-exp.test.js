import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import {heroe} from '../../src/data/heroes';
describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero)

        //puede tener los expects qeu yo desee
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroeById debe de retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero)

        expect(hero).toBeFalsy();
    });



    test('getHeroesByOwner debe de retornar heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);


        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },

            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },

        ]);

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )
    });
     
    test('getHeroesByOwner debe de retornar heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log( heroes);


        expect(heroes.length).toBe(2);
        
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
        console.log( heroes);
    });

});