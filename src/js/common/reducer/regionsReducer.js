import {
    GET_REGIONS_SUCCESS,
} from "../constants/regionsConstants";

export default function regionsReducer(state = {
    regions: [],
}, action) {
    switch (action.type) {
        case GET_REGIONS_SUCCESS:
            return {...state, regions: action.data};
        default:
            return state;
    }
}