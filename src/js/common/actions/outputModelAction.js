import * as modelConstants from "../constants/outputModelConstants";
import {IS_DEBUG} from '../properties';


export function getHeader(props) {
    if (IS_DEBUG) {
        console.log('NEPLOG: outputModelAction: getHeader: props = ' + props);
    }
    return (dispatch) => {
        dispatch({
            type: modelConstants.GET_HEADER,
            data: {
                field: field,
                value: value,
            }
        })
    }
}
