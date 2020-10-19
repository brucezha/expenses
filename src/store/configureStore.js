import { createStore, combineReducers, applyMiddleware } from 'redux';
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import thunk from 'redux-thunk';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //compose needs to be imported;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};



