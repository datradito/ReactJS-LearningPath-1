import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";
import { fireEvent } from "@testing-library/react";


describe('Pruebas en el <CounterApp/>', () => {

    const initialValor = 10;

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<CounterApp valor={initialValor} />);
        expect(container).toMatchSnapshot();

    })

})


describe('Pruebas en el <CounterApp/>', () => {

    const initialValor = 10;

    test('debe de mostrar el valor inicial de 100 <CounterApp valor={100}>', () => {

        render(<CounterApp valor={100} />);
        expect(screen.getByText('100')).toBeTruthy();


        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100')

    });

})


describe('Pruebas en el <CounterApp/>', () => {

    const initialValor = 10;


    test('debe incrementar con el boton +1', () => {


        render(<CounterApp valor={initialValor} />);
        fireEvent.click(screen.getByText('+1'));
        screen.debug();
        expect(screen.getByText('11')).toBeTruthy();


    });

    test('debe decrementar con el boton -1', () => {

        render(<CounterApp valor={initialValor} />);
        fireEvent.click(screen.getByText('-1'));
        screen.debug();
        expect(screen.getByText('9')).toBeTruthy();

    });

test('debe de funcionar el boton de reset',()=>{


    render(<CounterApp valor={10} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
   // fireEvent.click(screen.getByText('reset'));
    screen.debug();

    fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));

    expect(screen.getByText(10)).toBeTruthy();

});



})



