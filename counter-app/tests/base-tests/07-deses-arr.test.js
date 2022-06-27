import { returnArray } from '../../src/base-tests/07-deses-arr';



describe('07-deses-arr', ()  => {
    const retornaArray = () => {
        return ['chocolate', 123];
    };

    test('debe retornar strings', () => {
        const [letters, numbers] = retornaArray();

        expect(letters).toBe('chocolate');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String));
    });
});