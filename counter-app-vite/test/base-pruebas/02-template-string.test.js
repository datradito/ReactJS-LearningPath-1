import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en O2-template-string', () => {

    test('getSaludo debe retornar "Hola Paloma"', () => {

        const name =  "Paloma";

        const menssage =  getSaludo(name);


        expect(menssage).toBe(`Hola ${name}`)

    });

});