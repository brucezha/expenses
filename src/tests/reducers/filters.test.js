import filterReducer from '../../reducers/filters'
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const curState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filterReducer(curState, { type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'my filter'
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text});
    expect(state.text).toBe(text);
});

test('should set start date filter', () => {
    const startDate = moment().startOf('year')
    const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate});
    expect(state.startDate).toEqual(startDate);
});

test('should set end date filter', () => {
    const endDate = moment().endOf('year')
    const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate});
    expect(state.endDate).toEqual(endDate);
});