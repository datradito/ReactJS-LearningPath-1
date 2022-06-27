import { getHeroeById, getHeroeByOwner } from "../../src/base-tests/08-imp-exp";

describe('08-imp-exp', ()  => {
    test('getHeroeById debe retornar un heroeById', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        
    });

    test('getHeroeByOwner debe retornar un heroeByOwner de DC', () => {
        const owner = 'DC';
        const hero = getHeroeByOwner(owner);

        expect(hero).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Arrow',
                owner: 'DC'
            },
            {
                id: 5,
                name: 'Robin',
                owner: 'DC'
            }
        ]);
        // ideal hacerlo asi
        expect(hero).toEqual(hero.filter((heroe) => heroe.owner === owner))
    });
});
