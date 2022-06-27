import { getHeroeByIdAsync } from "../../src/base-tests/09-promesas";

describe('09-promesas', ()  => {
    test('getHeroeByIdAsync', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
    });

    /* test('getHeroeByIdAsync obtener un error si heroe no existe', (done) => {
        const id = 30;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el heroe ${ id }`)
                done();
            });
    }); */
});