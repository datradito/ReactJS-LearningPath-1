import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe ('Pruebas en <GifGridItems />', () => {
    test('debe mostrar componente correctamente', => {
        const wrapper = shallow(<GifGridItem />)
    })
})