import { getUser, getUserActive } from "../../src/base-tests/05-funciones";

describe('05-funciones', ()  => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'orne'
        };
        const user = getUser();
        expect(testUser).toEqual(user);
    });

    test('getUserActive debe retornar un objeto', () => {
        const name = 'Luna'
        const user = getUserActive(name);
        expect(user).toEqual({
            uid: 'ZXY123',
            username: name
        });
    });
});