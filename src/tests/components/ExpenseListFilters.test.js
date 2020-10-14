import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';
import React from 'react';
import { shallow } from 'enzyme';
import { DateRangePicker } from 'react-dates';
jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

let setStartDate, setEndDate, setTextFilter, setSelect, wrapper;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    setSelect = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
            setTextFilter = {setTextFilter}
            setSelect = {setSelect}
        />
    );
});

test('should render Expense List filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render Expense List filters with alt filter correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value ='rent';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(setSelect).toHaveBeenLastCalledWith(value);
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(setSelect).toHaveBeenLastCalledWith(value);
});

test('should handle date change', () => {
    const startDate = moment(0).add(3, 'years');
    const endDate = moment(0).add(5, 'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus', () => {
    const calendarFocused = 'startDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});