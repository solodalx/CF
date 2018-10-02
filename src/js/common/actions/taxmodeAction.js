import {get} from '../utils/http';
import * as properties from '../properties';
import {GET_TAXMODE_SUCCESS} from "../constants/taxmodeConstants";

export function getTaxmode() {
    return (dispatch) => {
        if (properties.BACKEND_SERVER_IP != '') {
            let url = properties.BACKEND_SERVER_IP + properties.GET_TAXMODE_API

            get(url).then((response) => {
                console.log('NEPLOG: Tax mode REST response:')
                console.log(response.data);

                dispatch({
                    type: GET_TAXMODE_SUCCESS,
                    data: response.data,
                })
            })
        }
        else {
            dispatch({
                type: GET_TAXMODE_SUCCESS,
                data: getTaxmodeStatic(),
            })
        }
    }
}


function getTaxmodeStatic() {
    return [{"id":"96107147-c570-4d95-94c6-58c3a4ed0c0f","name":"УСН"},{"id":"a48926e5-6838-4eb6-aa7e-b3ec82fd70ee","name":"ЕНВД"},{"id":"d1d27ef6-743d-42b5-9bbe-dad7a27193c9","name":"ЕСХН"},{"id":"93196aa1-ef39-49ec-8bcd-31acdd7229d3","name":"ОСН"}];
}