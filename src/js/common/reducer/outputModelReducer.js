import * as outputModelConstants from "../constants/outputModelConstants";
import * as outputModel from "../outputModel";
import {IS_DEBUG} from '../properties';

// export default function modelReducer(state = {model: [],}, action) {
export default function outputModelReducer(state = outputModel.initialModelState, action) {
    if (IS_DEBUG) {
        console.log('NEPLOG: outputModelReducer: type = ' + action.type + ', data = ' + action.data);
        console.log(action.data);
    }
    switch (action.type) {
        case outputModelConstants.GET_HEADER:
            return outputModel.getHeader(state, action.data.field, action.data.value);
        default:
            return state;
    }
}



