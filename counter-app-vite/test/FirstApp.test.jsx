import {render}  from '@testing-library/react'
import {FirstApp} from '../src/FirstApp'


describe('Prubeas en <FirstApp/>', () => {
/* 
    test('debe hacer match con la captura ', () => {

        const title = "Hola, soy Paloma";

      
       const {container} = render( <FirstApp title = {title} /> );


        expect(container).toMatchSnapshot();

    })
 */
    test('debe mostrar eñ titulo en un h1', () => {
        const title = "Hola, soy Paloma";

      
        const {container, getByText, getByTestId} = render( <FirstApp title = {title} /> );

        expect( getByText(title)).toBeTruthy()
        expect(getByTestId('test-title').innerHTML).toContain(title)

    });

    test('debe de mostar el subtitulo enviado por props', () => {

        const title = "Hola, soy Paloma";

        const subtitle = "Mi primera app react"

      
        const {getByText} = render( <FirstApp title = {title}  subtitle = {subtitle}/> );

        expect( getByText(subtitle)).toBeTruthy();
    })
    
})