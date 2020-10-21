import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import authReducer from '../reducers/auth'

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //compose needs to be imported;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};



