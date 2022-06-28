/**
 * @jest-environment jsdom
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GifApp  from '../../src/tests/Gif_App/GifApp';

describe('Pruebas de GifApp', () => {
    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <GifApp /> );
        expect( container ).toMatchSnapshot( );
    });
    test('Debe hacer la búsqueda del input', () => {
        render( <GifApp /> );
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value: 'Naruto'} });
    });
    test('handleCategoryAdd debe capitalizar las búsquedas', () => {
        render( <GifApp /> );
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value: 'oNe pIeCe'} });
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(screen.getByText('One Piece').toBeTruthy)
    });
}) 
