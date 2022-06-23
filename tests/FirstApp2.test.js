import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp/>', () => {

    const title = 'Hola, soy Begoña'

    test('debe de hacer match con el snapshot', () => {


        const { container } = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot();
    });


})

test('debe de mostrar el mensaje "hola soy Begoña"', () => {

    const title = 'Hola, soy Begoña'
    render(<FirstApp title={title} />)
    screen.debug();

    expect(screen.getAllByText(title)).toBeTruthy();
});


test('debe de mostrar el titulo en un h1', () => {

    const title = 'Hola, soy Begoña'
    render(<FirstApp title={title} />)
    screen.debug();

    expect(screen.getByText(title)).toBeTruthy();
});


const title = 'Hola, soy Begoña'
test('debe de mostrar el titulo en un h1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);

});

const subTitle = 'soy un subtitulo'
test('debe de mostrar el subtitulo enviado por props', () => {
    render(<FirstApp

        title={title}
        subTitle={subTitle}
    />);

    expect(screen.getAllByText(subTitle).length).toBe(2);


});