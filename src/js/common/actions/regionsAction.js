import {GET_REGIONS_SUCCESS} from "../constants/regionsConstants";

export function getRegions() {
    return (dispatch) => {
        dispatch({
            type: GET_REGIONS_SUCCESS,
            // data: []
            // data: 'Москва',
            data: getRegionsStatic(),
        })
    }
}

function getRegionsStatic() {
    return [
        {id: 77, name: 'Москва',},
        {id: 50, name: 'Московская обл.'},
        {id: 22, name: 'Алтайский край'},
        {id: 28, name: 'Амурская область'},
        {id: 29, name: 'Архангельская область'},
        {id: 30, name: 'Астраханская область'},
        {id: 31, name: 'Белгородская область'},
        {id: 32, name: 'Брянская область'},
        {id: 33, name: 'Владимирская область'},
        {id: 34, name: 'Волгоградская область'},
        {id: 35, name: 'Вологодская область'},
        {id: 36, name: 'Воронежская область'},
        {id: 79, name: 'Еврейская автономная область'},
        {id: 75, name: 'Забайкальский край'},
        {id: 37, name: 'Ивановская область'},
    ];
}