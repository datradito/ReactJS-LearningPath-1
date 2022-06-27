import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/App';

describe('pruebas en CounterApp', () => {
    const initialValue = 5;

     test('debe de hacer match con snapshot', () => {
        const { container } = render( <CounterApp value={ initialValue } /> );
        expect(container).toMatchSnapshot();
    }); 

    test('debe de mostrar initialValue = 5', () => {
        render( <CounterApp value={ 5 } /> );
        expect(screen.getByText(5)).toBeTruthy();
    });

    test('incrementar +1', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click(screen.getByText('+ 1'));
        expect(screen.getByText('6')).toBeTruthy();
    });
    test('decrementar -1', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click(screen.getByText('- 1'));
        expect(screen.getByText('4')).toBeTruthy();
    });
})