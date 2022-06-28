/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import GifCategory  from '../../src/tests/Gif_App/GifCategory';
import useFetchGifs from '../../src/hooks/useFetchGifs_testing';

jest.mock('../../src/hooks/useFetchGifs_testing')

describe('Pruebas de GifCategory', () => {
    const category = 'Naruto';

    test('Debe mostrar "Cargando..." inicialemente', () => {
        useFetchGifs.mockReturnValue({
            foundGifs: [],
            isLoading: true
        });
        
        render( <GifCategory category={category}/> );
        expect (screen.getByText('Cargando...'))
    });
    
    test('Debe mostrar GifItems', () => {
        const gifs = [
            {
                id: 'asdfg234',
                title:'Naruto',
                url: 'asd.jpg'
            },
            {
                id: 'gfdew',
                title:'Goku',
                url: 'asd.jpg'
            },
            {
                id: '23456d',
                title:'Sakura',
                url: 'asd.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
            foundGifs: gifs,
            isLoading: false
        });
        
        render( <GifCategory category={category}/> );
        expect( screen.getAllByRole('img').length ).toBe( gifs.length )
    });
}) 