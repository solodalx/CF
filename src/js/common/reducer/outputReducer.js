import {GET_OUTPUT_SUCCESS} from "../constants/outputConstants";

export default function outputReducer(state = {
    output: [],
}, action) {
    switch (action.type) {
        case GET_OUTPUT_SUCCESS:
            // return {...state, output: action.data};
            return {...state,
                output: {...action.data, pop1: action.data.pop},
                pnlHeader: action.pnlHeader,
                cfHeader: action.cfHeader,
                pnlCfLabels: action.pnlCfLabels,
            };
        default:
            return state;
    }
}