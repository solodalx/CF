import {
    GET_TAXMODE_SUCCESS,
} from "../constants/taxmodeConstants";

export default function taxmodeReducer(state = {
    taxmode: [],
}, action) {
    switch (action.type) {
        case GET_TAXMODE_SUCCESS:
            return {...state, taxmode: action.data};
        default:
            return state;
    }
}