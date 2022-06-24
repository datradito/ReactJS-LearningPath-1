import {fireEvent, render, screen}  from '@testing-library/react'
import {CounterApp} from '../src/CounterApp'


describe('Pruebas en el <CounterApp />' ,() => {


    const initialValue = 10;

    test('debe de hacer match con el sanpshot ', () => {
      

        const {container} =  render(<CounterApp value = {initialValue} />);

        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el valor inicial de 100 <Counter value={100} />' , () => {
        render(<CounterApp value={ 100 }/>);

        expect(screen.getByText(100)).toBeTruthy();
    });


    test('debe incrementar con el boton + ', () =>{
        render(<CounterApp value={ initialValue }/>);

        //fireEvent.click(screen.getByText('+'))
        fireEvent.click(screen.getByRole('button', {name: 'btn-suma'}))


        expect(screen.getByText('11')).toBeTruthy()


    })


    
    test('debe decrementar con el boton - ', () =>{
        render(<CounterApp value={ initialValue }/>);

        //fireEvent.click(screen.getByText('-'))
        fireEvent.click(screen.getByRole('button', {name: 'btn-resta'}))


        expect(screen.getByText('9')).toBeTruthy()


    })

    test('debe resetear el counter', () =>{
        render(<CounterApp value={ 254 }/>);

        fireEvent.click(screen.getByText('+'))
        fireEvent.click(screen.getByText('+'))
        fireEvent.click(screen.getByText('+'))

        //fireEvent.click(screen.getByText('Reset'))

        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))


        expect(screen.getByText(254)).toBeTruthy()


    })
    
})