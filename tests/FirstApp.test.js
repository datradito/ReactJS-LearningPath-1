import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

// eliminado en capitulo 64, Snapshopt crea confusion en el desarrollo porque muestra un render temporal de la pagina 
/*describe('pruebas en <FirstApp/>', () => {

    test('debe de hacer match con el snapshot', () => {

        const title = 'Hola, soy Begoña';
        const { container } = render
            (<FirstApp title={title} />);

        expect(container).toMatchSnapshot();

        console.log(container);


    });
});*/

describe('contener texto en titulo', () => {
    test('debe de mostrar el titulo en un h1', () => {

        const title = 'Hola, soy Begoña';
        const { container, getByText, getByTestId } = render
            (<FirstApp title={title} />);

        // eliminado cap 64 //expect(getByText(title)).toBeTruthy();//que se encuentre

        expect(getByTestId('test-title').innerHTML).toContain(title);

        // eliminado en cap 64
        /*const h1= container.querySelector('h1');
        console.log(h1.innerHTML).toContain(title)//que contenga*/

    });

});

describe('subtitulo', () => {
    test('debe de mostrar el subtitulo enviado por props', () => {

        const title = 'Hola, soy Begoña';
        const subTitle = 'soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        );

        expect(getAllByText(subTitle).length ).toBe(2);


    });
});