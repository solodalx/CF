import {combineReducers, createStore, applyMiddleware} from 'redux';
import {filterActions} from 'redux-ignore';
import thunk from 'redux-thunk';

import regionsReducer from '../reducer/regionsReducer';
import townsReducer from '../reducer/townsReducer';
import businessAreaReducer from '../reducer/businessAreaReducer';
import environmentReducer from '../reducer/environmentReducer';
import taxmodeReducer from '../reducer/taxmodeReducer';
import bigdataReducer from '../reducer/bigdataReducer';
import modelReducer from '../reducer/modelReducer';
import outputReducer from '../reducer/outputReducer';
// import outputModelReducer from '../reducer/outputModelReducer';

import {regionsActions} from '../constants/regionsConstants';
import {townsActions} from '../constants/townsConstants';
import {businessAreaActions} from '../constants/businessAreaConstants';
import {environmentActions} from '../constants/environmentConstants';
import {taxmodeActions} from '../constants/taxmodeConstants';
import {bigdataActions} from '../constants/bigdataConstants';
import {modelActions} from '../constants/modelConstants';
import {outputActions} from '../constants/outputConstants';
// import {outputModelActions} from '../constants/outputModelConstants';


const rootReducer = combineReducers({
    regionsState: filterActions(regionsReducer, regionsActions),
    townsState: filterActions(townsReducer, townsActions),
    businessAreaState: filterActions(businessAreaReducer, businessAreaActions),
    environmentState: filterActions(environmentReducer, environmentActions),
    taxmodeState: filterActions(taxmodeReducer, taxmodeActions),
    bigdataState: filterActions(bigdataReducer, bigdataActions),
    modelState: filterActions(modelReducer, modelActions),
    outputState: filterActions(outputReducer, outputActions),
    // outputModelState: filterActions(outputModelReducer, outputModelActions),
});

export default function cofigureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
}
