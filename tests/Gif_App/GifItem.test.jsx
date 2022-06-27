/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import GifItem from '../../src/tests/Gif_App/GifItem';

describe('Pruebas de GifItem', () => {
    const gif = {title: 'Naruto', url: 'https://www.giantbomb.com/a/uploads/scale_small/3/33873/1700999-naruto.png', id: '1'};

    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <GifItem gif={gif} /> );
        expect( container ).toMatchSnapshot( );
    });
    
    test('Debe mostrar el src y alt correspondiente', () => {
       render( <GifItem gif={gif} /> );
       const {src, alt} = screen.getByRole('img');
       expect( src ).toBe( gif.url )
       expect( alt ).toBe( gif.title )
    });
}) 
