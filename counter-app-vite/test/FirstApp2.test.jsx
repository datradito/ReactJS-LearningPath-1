import {render, screen}  from '@testing-library/react'
import {FirstApp} from '../src/FirstApp'


describe('Prubeas en <FirstApp/>', () => {

    test('debe hacer match con la captura ', () => {

      
       const {container} = render( <FirstApp title = {title} /> );


        expect(container).toMatchSnapshot();

    })
 
    test('debe mostrar el mensaje "Hola, soy Paloma"', () => {

        
       render( <FirstApp title = {title} /> );

       expect(screen.getByText(title)).toBeTruthy()

    });


    test('debe mostar el titulo en un h1' , () => {
        render( <FirstApp title = {title} /> );
        expect(screnn.getByRole('heading', {level: 1}).innerHTML).toContain(title)
    });



    test('debe de mostrar el subtitulo enviado por props', () => {

        render( <FirstApp title = {title} subtitle={subtitle} /> );


        expect(screen.getAllByText(subtitle).length).toBe(2);


    })

    
    
})