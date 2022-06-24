import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe ('Pruebas de 08-imp-exp', () => {

    test('getHeoeById debe retornarnar un herore por id ',() => {

        const id =  100;
        const hero =  getHeroeById(id);

        console.log(hero);


       // expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

        expect(hero).toBeFalsy()
    });

    test('getHeoeByOwner debe regresar heroes de DC',() => {

       const owner =  'DC';
       const heroes = getHeroesByOwner(owner)

       console.log(owner)
       expect(heroes.length).toBe(3);
      expect(heroes).toEqual([
        {id: 1,name: 'Batman', owner: 'DC'},
        {id: 3,name: 'Superman', owner: 'DC'},
        {id: 4,name: 'Flash', owner: 'DC'}
      ]);
       
    });
    

})