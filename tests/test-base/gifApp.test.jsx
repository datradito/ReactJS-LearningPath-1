/**
 * @jest-environment jsdom
 */


 import React from 'react';
 import { fireEvent, render, screen } from '@testing-library/react';
 import { GifApp } from '../../src/Gif_App/GifApp';

 describe('Pruebas de GifApp', () => {
     test('Debe hacer match con el snapshot', () => {
         const { container } = render( <GifApp/> );
         expect( container ).toMatchSnapshot( );
     });
 
     test('handleCategoryAdd debe modificar categories', () => {
         expect( ).toBe( );
     });
 }) 
