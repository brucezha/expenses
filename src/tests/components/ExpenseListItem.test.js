import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem';
import React from 'react';
import { shallow } from 'enzyme';

test('should render Expense List Item with expenses', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});