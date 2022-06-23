/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Counter } from '../../src/test-base/counterApp';

describe('Pruebas de counterApp', () => {
    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <Counter/> );
        expect( container ).toMatchSnapshot( );
    });

    test('Click debe tener un valor de 0 al iniciar la app', () => {
        //Inicialización
        const clickFirstValue = 0;

        //Estímulo
        render( <Counter/> );
        
        //Obervar comportamiento
        expect( screen.getByText(clickFirstValue) ).toBeTruthy( );
    });
})