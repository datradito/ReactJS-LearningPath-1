import { getGreet } from "../../src/base-tests/02-template-string";

describe('02-template-string', ()  => {
    test('getGreet debe retornar "Hola Orne"', () => {
        const name = 'Orne';
        const msg = getGreet(name);
        expect(msg).toBe(`Hola ${ name }`)
    });
});