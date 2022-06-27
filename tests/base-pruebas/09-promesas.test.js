import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', (done) => {

    test('getHeroesByAsync debe de retornar un heroe', () => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                // me sale igual A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.
                done();
            })



    });
});
//error
//no imprime el error
test('getHeroesByAsync debe de retornar un error si heroe no existe', () => {

    const id = 100;
    getHeroeByIdAsync(id)
        .catch(error => {

            console.log(error);

            expect(error).toBe(`No se pudo encontrar el heroe ${id}`)

            done();
        })



});

test('getHeroesByAsync debe de retornar un error si heroe no existe', () => {

    const id = 100;
    getHeroeByIdAsync(id)
    
        .then(hero => {
            expect(hero).toBeFalsy
            done()
        })
        .catch(error => {


            expect(error).toBe(`No se pudo encontrar el heroe ${id}`)

            done();
        })



});






