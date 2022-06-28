import useFetchGifs from '../../src/hooks/useFetchGifs_testing';
import { renderHook, waitFor } from '@testing-library/react';
//Los hooks se evalúan en base a sus valores de retorno
describe('Pruebas del hook useFetchGifs', () => {
    test('Debe regresar el estado inicial', () => {
        const {result} = renderHook(() => useFetchGifs('Naruto'));
        const {foundGifs, isLoading } = result.current;
        expect( foundGifs.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });
    test('Debe regresar el estado en uso', async() => {
        const {result} = renderHook(() => useFetchGifs('Naruto'));
        await waitFor(
            () =>  expect( result.current.foundGifs.length ).toBeGreaterThan(0)
        );
        
        const {foundGifs, isLoading } = result.current;

        expect( foundGifs.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
})