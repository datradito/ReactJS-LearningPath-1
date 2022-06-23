/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

    test('El botón "Click aquí" debe incrementar el valor de click', () => {
        render( <Counter/> );
        fireEvent.click( screen.getByRole('button', {name: 'Click aquí'}));
        expect( screen.getByText(1) ).toBeTruthy( );
    });

    test('El botón "Restaurar contador" debe poner el valor de click en 0', () => {
        render( <Counter/> );
        fireEvent.click( screen.getByRole('button', {name: 'Restaurar contador'}));
        expect( screen.getByText(0) ).toBeTruthy( );
    });
})