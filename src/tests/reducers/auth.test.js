import autReducer from '../../reducers/auth'

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };
    const state = autReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('should clear uid when logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = autReducer({ uid: 'anything' }, action);
    expect(state).toEqual({});
});