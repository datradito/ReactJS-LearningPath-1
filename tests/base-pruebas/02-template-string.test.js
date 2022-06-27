
import {getSaludo} from "../../src/base-pruebas/02-template-string.js";

describe('pruebas en 02-template-string', () => {

    test('getSaludo debe retornar" Hola Begoña"', () => {

        const name = 'begoña';
        const message = getSaludo(name);

        expect (message).toBe(`Hola ${name}!!!!!`)


    });


});