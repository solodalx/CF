import {
    GET_ENVIRONMENT_SUCCESS,
} from "../constants/environmentConstants";

export default function environmentReducer(state = {
    environment: [],
}, action) {
    switch (action.type) {
        case GET_ENVIRONMENT_SUCCESS:
            return {...state, environment: action.data};
        default:
            return state;
    }
}