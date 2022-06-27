import {GetGifs} from '../../src/utils/getGifs_testing';
 
describe('Pruebas de GetGifs', () => {

    test('Debe devolver un array de gifs', async() => {
        const gifs = await GetGifs('Naruto');
        
        expect( gifs.length ).toBeGreaterThan(0);
        expect ( gifs[0] ).toEqual( {
            id: expect.any( String ) ,
            title: expect.any( String ) ,
            url: expect.any( String ) ,
        })
    });
}) 
 