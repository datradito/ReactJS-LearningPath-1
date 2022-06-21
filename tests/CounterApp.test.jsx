import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';


describe('Pruebas en el <CounterApp />', () => {

    const initialValue = 20;

    test('debe de mostrar el valor inicial <CounterApp value={ initialValue }>', () => {
        
        render( <CounterApp value={ initialValue } /> );
        expect( screen.getByText(initialValue) ).toBeTruthy();

    });

    test('debe de incrementar con el botón +1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText(initialValue + 1) ).toBeTruthy();

    });

    test('debe de decrementar con el botón -1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText(initialValue - 1) ).toBeTruthy();

    });

    test('debe de funcionar el botón de reset', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );
        expect( screen.getByText( initialValue ) ).toBeTruthy();

    });

    
});