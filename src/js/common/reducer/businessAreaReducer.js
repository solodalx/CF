import {
    GET_BUSINESSAREA_SUCCESS,
} from "../constants/businessAreaConstants";

export default function businessAreaReducer(state = {
    businessArea: [],
}, action) {
    switch (action.type) {
        case GET_BUSINESSAREA_SUCCESS:
            return {...state, businessArea: action.data};
        default:
            return state;
    }
}