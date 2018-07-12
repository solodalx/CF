import {combineReducers, createStore, applyMiddleware} from 'redux';
import {filterActions} from 'redux-ignore';
import thunk from 'redux-thunk';

import regionsReducer from '../reducer/regionsReducer';
import businessAreaReducer from '../reducer/businessAreaReducer';
import environmentReducer from '../reducer/environmentReducer';
import taxmodeReducer from '../reducer/taxmodeReducer';

import {regionsActions} from '../constants/regionsConstants';
import {businessAreaActions} from '../constants/businessAreaConstants';
import {environmentActions} from '../constants/environmentConstants';
import {taxmodeActions} from '../constants/taxmodeConstants';


const rootReducer = combineReducers({
    regionsState: filterActions(regionsReducer, regionsActions),
    businessAreaState: filterActions(businessAreaReducer, businessAreaActions),
    environmentState: filterActions(environmentReducer, environmentActions),
    taxmodeState: filterActions(taxmodeReducer, taxmodeActions),
});

export default function cofigureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
}
