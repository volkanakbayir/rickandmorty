import React from 'react';
import LoadingAnimation from '../../../components/LoadingAnimation/LoadingAnimation';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const wrapper = shallow(<LoadingAnimation />);
});


it('should have correct classname', () => {
    const wrapper = shallow(<LoadingAnimation />);
    expect(wrapper.hasClass('lds-ellipsis')).toEqual(true);
});