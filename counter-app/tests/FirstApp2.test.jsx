import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('FirstApp2', ()  => {
    const title = 'Hello world';
    const subtitle='subtitle';
   
    test('debe hacer match con snapshot', () => {
        const { container } = render(<FirstApp title={ title } />);
        expect(container).toMatchSnapshot();
    });

    /* test('debe mostrar "hello Ornella"', () => {
        render(<FirstApp title={ title } />);
        expect(screen.getAllByText(title)).toBeTruthy();
    }); */

    test('debe mostrar titulo h1', () => {
        render(<FirstApp title={ title } />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('debe mostrar titulo h1', () => {
        render(<FirstApp title={ title } />);
        expect(screen.getAllByText(subtitle).length).toBe(1);
    });
});