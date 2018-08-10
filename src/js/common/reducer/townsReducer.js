import {
    GET_TOWNS_SUCCESS,
} from "../constants/townsConstants";

export default function townsReducer(state = {
    towns: [],
}, action) {
    switch (action.type) {
        case GET_TOWNS_SUCCESS:
            return {...state, towns: action.data, suggestions: action.suggestions};
        default:
            return state;
    }
}