import React from 'react';
import { render } from '@testing-library/react';
import {Counter} from '../../src/test-base/counterApp';
/**
 * @jest-environment jsdom 
 */

describe('Pruebas de counterApp', () => {
    test('Debe hacer match con el snapshot', () => {
        render( <Counter />);
    });

    test('Click debe tener un valor de 0 al iniciar la app', () => {
        //Inicialización
        const clickFirstValue = 0;

        //Estímulo
        let click = render( <Counter />).querSelector('span').innerHTML;
        console.log(click);
        //Obervar comportamiento
        expect( click ).toBe( clickFirstValue );
    });
})