import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('FirstApp', ()  => {
    test('debe mostrar el titulo en h1', () => {
        const title = 'Hello world';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title)
    });

    test('debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hello world';
        const subTitle = 'subtitle';
        const { getAllByText } = render(
        <FirstApp 
            title={ title } 
            subTitle={ subTitle } 
        />);
        expect(getAllByText(subTitle).length).toBe(1);
    });
});