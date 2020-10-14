import ExpenseDashBoardPage from '../../components/ExpenseDashboardPage';
import React from 'react';
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
    const wrapper = shallow(<ExpenseDashBoardPage />);
    expect(wrapper).toMatchSnapshot();
});