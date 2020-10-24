import { Header } from '../../components/Header';
import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '@material-ui/core';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find(Button).simulate('click');
    expect(startLogout).toHaveBeenCalled();
});