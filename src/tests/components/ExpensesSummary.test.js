import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={234} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={2342323332} />);
    expect(wrapper).toMatchSnapshot();
});
