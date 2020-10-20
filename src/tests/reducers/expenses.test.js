import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add expense', () => {
   const expense = {
        id: '4',
        description: 'S Pellegrino',
        note: '36 bottles',
        amount: 1600,
        createdAt: undefined
    };
    const action = {
        type: 'ADD_EXPENSE', 
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id });
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: -1 });
    expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
    const updates = {
        note : 'test'
    };
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[1].id, updates });
    expect(state[1].note).toBe(updates.note);
});

test('should not edit expense if id not found', () => {
    const updates = {
        note : 'test'
    };
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: -1, updates });
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[0]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0]]);
});