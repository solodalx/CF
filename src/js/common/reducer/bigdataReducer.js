import {
    GET_BIGDATA_SUCCESS,
} from "../constants/bigdataConstants";

export default function bigdataReducer(state = {
    bigdata: [],
}, action) {
    switch (action.type) {
        case GET_BIGDATA_SUCCESS:
            return {...state, bigdata: action.data};
        default:
            return state;
    }
}