import { 
    startAddCard, 
    startSetCards
} from '../../actions/cards';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import cards from '../fixtures/cards';
import database from '../../firebase/firebase';

const uid = 'testuid';
const defaultAuthState = { auth: {uid} };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const cardsData = {};
    cards.forEach(({ id, cardName }) => {
        cardsData[id] = { id, cardName };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

// test('should setup remove expense action object', () => {
//     const action = removeExpense({ id: '123abc' });
//     expect(action).toEqual({
//         type: 'REMOVE_EXPENSE',
//         id: '123abc'
//     });
// });

// test('should remove expense from firebase', (done) => {
//     const store = createMockStore(defaultAuthState);
//     const id = expenses[2].id;
//     store.dispatch(startRemoveExpense({ id })).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'REMOVE_EXPENSE',
//             id
//         });
//         return database.ref(`users/${uid}/expenses/${id}`).once('value');
//     }).then((snapshot) => {
//         expect(snapshot.val()).toBeFalsy();
//         done();
//     });
// });

// test('should setup edit expense action object', () => {
//     const action = editExpense('123abc', { note: 'New note value'});
//     expect(action).toEqual({
//         type: 'EDIT_EXPENSE',
//         id: '123abc',
//         updates: {
//             note: 'New note value'
//         }
//     });
// });

// test('should edit expense from firebase', (done) => {
//     const store = createMockStore(defaultAuthState);
//     const id = expenses[2].id;
//     const updates = { note: 'New note value' }
//     store.dispatch(startEditExpense(id, updates)).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'EDIT_EXPENSE',
//             id,
//             updates
//         });
//         return database.ref(`users/${uid}/expenses/${id}`).once('value');
//     }).then((snapshot) => {
//         expect(snapshot.val().note).toBe(updates.note);
//         done();
//     });
// });

// test('should setup add expense action object with values provided', () => {
//     const action = addExpense(expenses[2]);
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: expenses[2]
//     });
// });

// test('should add expense to database and store', (done) => {
//     const store = createMockStore(defaultAuthState);
//     const expenseData = {
//         description: 'Bagles',
//         amount: 499,
//         card: '',
//         note: 'from Price Chopper',
//         createdAt: 1000
//     };

//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         });
//         return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once(`value`);
//     }).then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseData);
//         done();
//     });
// }); 

// test('should add expense to with default database and store', (done) => {
//     const store = createMockStore(defaultAuthState);
//     const expenseDefault = {
//         description: '',
//         amount: 0,
//         card: '',
//         note: '',
//         createdAt: 0
//     };

//     store.dispatch(startAddExpense({})).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseDefault
//             }
//         });
//         return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once(`value`);
//     }).then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseDefault);
//         done();
//     });
// }); 

// test('should setup expense action with data', () => {
//     const action = setExpenses(expenses);
//     expect(action).toEqual({
//         type: 'SET_EXPENSES',
//         expenses
//     });
// });

// test('should fetch expense data from firebase', () => {
//     const store = createMockStore(defaultAuthState);
//     store.dispatch(startSetExpenses()).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'SET_EXPENSES',
//             expenses
//         });
//         done();
//     });
// });
