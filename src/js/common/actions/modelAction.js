import * as modelConstants from "../constants/modelConstants";
import {IS_DEBUG} from '../properties';

// export function getExpensesManual(model) {
//     return (dispatch) => {
//         dispatch({
//             type: modelConstants.GET_MODEL_INPUT2_SUCCESS,
//             data: modelImpl.getExpensesManual(model),
//         })
//     }
// }
//
// export function setExpensesManual(model, checked) {
//     return (dispatch) => {
//         dispatch({
//             type: modelConstants.GET_MODEL_INPUT2_SUCCESS,
//             data: modelImpl.setExpensesManual(model, checked),
//         })
//     }
// }


export function fieldUpdated(field, value) {
    if (IS_DEBUG) {
        console.log('NEPLOG: modelAction: fieldUpdated: field = ' + field + ', value = ' + value);
    }
    return (dispatch) => {
        dispatch({
            type: modelConstants.UPDATE_FIELD,
            data: {
                field: field,
                value: value,
            }
        })
    }
}
