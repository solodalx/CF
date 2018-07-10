import {get} from '../http';
import * as properties from '../properties';
import {GET_REGIONS_SUCCESS} from "../constants/regionsConstants";

export function getRegions() {
    return (dispatch) => {
        if (properties.BACKEND_SERVER_IP != '') {
            // url = '40.115.40.71/api/data/regions'
            let url = properties.BACKEND_SERVER_IP + properties.GET_REGIONS_API

            get(url).then((response) => {
                dispatch({
                    type: GET_REGIONS_SUCCESS,
                    data: response.data,
                })
            })
        }
        else {
            dispatch({
                type: GET_REGIONS_SUCCESS,
                // data: []
                // data: 'Москва',
                data: getRegionsStatic(),
            })
        }
    }
}

function getRegionsStatic() {
    return [
        {uuid: 77, name: 'Москва',},
        {uuid: 50, name: 'Московская обл.'},
        {uuid: 22, name: 'Алтайский край'},
        {uuid: 28, name: 'Амурская область'},
        {uuid: 29, name: 'Архангельская область'},
        {uuid: 30, name: 'Астраханская область'},
        {uuid: 31, name: 'Белгородская область'},
        {uuid: 32, name: 'Брянская область'},
        {uuid: 33, name: 'Владимирская область'},
        {uuid: 34, name: 'Волгоградская область'},
        {uuid: 35, name: 'Вологодская область'},
        {uuid: 36, name: 'Воронежская область'},
        {uuid: 79, name: 'Еврейская автономная область'},
        {uuid: 75, name: 'Забайкальский край'},
        {uuid: 37, name: 'Ивановская область'},
    ];
}