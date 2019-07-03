import React from 'react';
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import CharacterCard from '../../../components/CharacterCard/CharacterCard';
import { shallow } from 'enzyme';

const mockCharacter = {
    name: 'Test Character',
    image: 'someimage.test.jpg',
    id: 'testid'
}

describe('CharacterCard component tests', () => {
    it('renders correct link', () => {
        const wrapper = shallow(<CharacterCard character={mockCharacter} />);
        expect(wrapper.find(Link).prop('to')).toEqual(`/detail/${mockCharacter.id}`);
    });

    it('renders correct avatar', () => {
        const wrapper = shallow(<CharacterCard character={mockCharacter} />);
        expect(wrapper.find(Avatar).prop('src')).toEqual(mockCharacter.image);
        expect(wrapper.find(Avatar).prop('alt')).toEqual(mockCharacter.name);
    });

    it('renders correct name', () => {
        const wrapper = shallow(<CharacterCard character={mockCharacter} />);
        expect(wrapper.find('h2').text()).toEqual(mockCharacter.name);
    });
})




