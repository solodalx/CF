import * as modelConstants from "../constants/modelConstants";
import {IS_DEBUG} from '../properties';

export default function modelReducer(state = {
    model: [],
}, action) {
    if (IS_DEBUG) {
        console.log('NEPLOG: modelReducer: type = ' + action.type + ', data = ' + action.data);
        console.log(action.data);
    }
    switch (action.type) {
        case modelConstants.SET_MODEL_INITIAL:
            return {...state, model: action.data};
        case modelConstants.GET_MODEL_INPUT2_SUCCESS:
            return {...state, model: action.data};
        default:
            return state;
    }
}