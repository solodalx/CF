import * as modelConstants from "../constants/modelConstants";
import * as modelImpl from "../model";
import {IS_DEBUG} from '../properties';

// export function setInitialState() {
//     return (dispatch) => {
//         if (IS_DEBUG) {
//             console.log('NEPLOG: modelAction: setInitialState()');
//         }
//         dispatch({
//             type: modelConstants.SET_MODEL_INITIAL,
//             data: modelImpl.setInitialState(),
//         });
//     }
// }

export function getExpensesManual(model) {
    return (dispatch) => {
        dispatch({
            type: modelConstants.GET_MODEL_INPUT2_SUCCESS,
            data: modelImpl.getExpensesManual(model),
        })
    }
}

export function setExpensesManual(model, checked) {
    return (dispatch) => {
        dispatch({
            type: modelConstants.GET_MODEL_INPUT2_SUCCESS,
            data: modelImpl.setExpensesManual(model, checked),
        })
    }
}

// export function fieldUpdated(model, fieldId, value) {
//     // var field = model.flAssetsLand;
//     return (dispatch) => {
//         dispatch({
//             type: modelConstants.GET_MODEL_INPUT2_SUCCESS,
//             data: modelImpl.fieldUpdated(model, fieldId, value),
//         })
//     }
// }

// export function fieldUpdated(blockName, fieldName, value) {
//     if (IS_DEBUG) {
//         console.log('NEPLOG: modelAction: fieldUpdated: blockName = ' + blockName + ', fieldName = ' + fieldName + ', value = ' + value);
//     }
//     return (dispatch) => {
//         dispatch({
//             type: modelConstants.UPDATE_FIELD,
//             // data: modelImpl.fieldUpdated(blockName, fieldName, value),
//             data: {
//                 blockName: blockName,
//                 fieldName: fieldName,
//                 value: value,
//             }
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
            // data: modelImpl.fieldUpdated(blockName, fieldName, value),
            data: {
                field: field,
                value: value,
            }
        })
    }
}

function getEnvironmentStatic() {
    return [{"uuid":"fe95b2d9-c5a5-412e-8c4f-56877f222d30","name":"Центр города"},{"uuid":"dae33e6c-cdd9-4168-ae13-b408692cc969","name":"Деловой район (не центр)"},{"uuid":"9f6ca3d2-6022-4245-9bed-9124b20c260c","name":"Спальный район"},{"uuid":"f9602da2-ef85-461c-aad3-b45be4d9b5bd","name":"Сельская местность"}];
}