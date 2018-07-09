import {combineReducers, createStore, applyMiddleware} from 'redux';
import {filterActions} from 'redux-ignore';
import thunk from 'redux-thunk';

import regionsReducer from '../reducer/regionsReducer';
import {regionsActions} from '../constants/regionsConstants';


const rootReducer = combineReducers({
    regionsState: filterActions(regionsReducer, regionsActions),
});

export default function cofigureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
}
