import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp.js"
import heroes from "../../src/base-pruebas/08-imp-exp.js";

describe('pruebasen 08-imp-exp', () => {


    test('getHeroeById debe retornar un hero por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero)

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    });

});

test('getHeroeById debe retornar undefined si no existe', () => {

    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
});

test('getHeroesByOwner debe retornar heroes de DC', () => {

    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
        { id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }

    ])

   expect(heroes).toEqual( heroes.filter((heroe)=> heroe.owner === owner));
});



test('getHeroesByOwner debe retornar heroes de Marvel', () => {

    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual( heroes.filter((heroe)=> heroe.owner === owner));
});