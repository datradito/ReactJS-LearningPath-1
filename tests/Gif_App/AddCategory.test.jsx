/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { fireEvent, render, screen } from '@testing-library/react';
 import AddCategory  from '../../src/tests/Gif_App/AddCategory';

 describe('Pruebas de AddCategory', () => {
    const inputValue = 'Naruto';

     test('Debe cambiar el valor del input', () => {
        render( <AddCategory handleNewCategory={()=> {}}/> );
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value:inputValue} });
        expect (input.value).toBe(inputValue)
     });
     test('Debe enviar el form y vaciar el input', () => {
        render( <AddCategory handleNewCategory={()=> {}}/> );

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value:inputValue} });

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(input.value).toBe('');
     });
     test('Debe ejecutar handleNewCategory si input tiene un valor', () => {
        const handleNewCategory = jest.fn();//simulación de una función
        render( <AddCategory handleNewCategory={handleNewCategory}/> );

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value: inputValue} });

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(handleNewCategory).toHaveBeenCalledTimes(1);
        expect(handleNewCategory).toHaveBeenCalledWith(inputValue);
     });
     test('No debe ejecutar handleNewCategory al enviar un input vacío', () => {
        const handleNewCategory = jest.fn();
        render( <AddCategory handleNewCategory={handleNewCategory}/> );

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value: ''} });

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(handleNewCategory).toHaveBeenCalledTimes(0);
     });
 }) 
 