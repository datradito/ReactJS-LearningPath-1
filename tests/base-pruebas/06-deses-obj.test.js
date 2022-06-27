import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('prueba en 06-deses', () => {

    test('usContext debe retornar un objeto', () => {

        const testUsContext = {
            clave: 25,
            nombre: 'juan',
            edad: 15,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const testu = usContext();

        console.log(testUsContext)

        expect(testUsContext).toStrictEqual(testu);

    });

});


