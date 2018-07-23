import * as modelConstants from "../constants/modelConstants";
import * as model from "../model";
import {IS_DEBUG} from '../properties';

// export default function modelReducer(state = {model: [],}, action) {
export default function modelReducer(state = model.initialModelState, action) {
    if (IS_DEBUG) {
        console.log('NEPLOG: modelReducer: type = ' + action.type + ', data = ' + action.data);
        console.log(action.data);
    }
    switch (action.type) {
        // case modelConstants.SET_MODEL_INITIAL:
        //     return {...state, model: action.data};
        // case modelConstants.GET_MODEL_INPUT2_SUCCESS:
        //     return {...state, model: action.data};
        case modelConstants.UPDATE_FIELD:
            // return Object.assign({}, state, {[action.data.blockName]: Object.assign({}, state[action.data.blockName], {[action.data.fieldName]: action.data.value})});
            // return {...state, [action.data.blockName]: {...state[action.data.blockName], [action.data.fieldName]: action.data.value}} ;
            // return model.updateState(state, action.data.blockName, action.data.fieldName, action.data.value)
            return model.updateState(state, action.data.field, action.data.value);
        default:
            return state;
    }
}



