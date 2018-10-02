import {get} from '../utils/http';
// import axios from 'axios';
import * as properties from '../properties';
import {GET_REGIONS_SUCCESS} from "../constants/regionsConstants";

export function getRegions() {
    return (dispatch) => {
        if (properties.BACKEND_SERVER_IP != '') {
            // let url = 'http://40.115.40.71/api/data/regions'
            let url = properties.BACKEND_SERVER_IP + properties.GET_REGIONS_API

            get(url).then((response) => {
                console.log('NEPLOG: Regions REST response:')
                console.log(response.data);

                dispatch({
                    type: GET_REGIONS_SUCCESS,
                    data: response.data,
                })
            })

            // let url = 'http://40.115.40.71/api/data/regions'
            // let config = {headers: {"Access-Control-Allow-Origin": "*"}};
            // let config = {headers: {"Access-Control-Allow-Origin": "http://localhost:3000"}};
            // axios.get(url, config).then((res) => {
            // axios.get(url).then((res) => {
            //     console.log('The response (0):')
            //     console.log(res.data);
            //
            //     dispatch({
            //         type: GET_REGIONS_SUCCESS,
            //         data: res.data,
            //     })
            // })


            // let responseRest = get(url)
            // if (responseRest != undefined) {
            //     responseRest.then((response) => {
            //         console.log('The response (1):')
            //         console.log(response)
            //         console.log('The response (2):')
            //         console.log(response.data)
            //         console.log('The response (3):')
            //         console.log(response.data.data)
            //         dispatch({
            //             type: GET_REGIONS_SUCCESS,
            //             data: response.data,
            //         })
            //     })
            // }
            // else {
            //     dispatch({
            //         type: GET_REGIONS_SUCCESS,
            //         data: getRegionsStatic(),
            //     })
            // }
        }
        else {
            dispatch({
                type: GET_REGIONS_SUCCESS,
                // data: []
                // data: 'Москва',
                data: getRegionsStatic2(),
            })
        }
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

function getRegionsStatic2() {
    return [{"id":"8f36c000-e283-4638-9141-a6032d71c41b","name":"Хакасия"},{"id":"d362423e-24cb-4ff1-8b9d-648e28f21ccf","name":"Оренбургская область"},{"id":"c4931bc2-6623-450f-8bde-8ff7dad642f0","name":"Краснодарский край"},{"id":"d709d561-3f3e-456c-9940-5b48ff0f8396","name":"Башкортостан"},{"id":"ccc3ae63-f5c2-43aa-bd01-2706c562a9fe","name":"Татарстан"},{"id":"16af67c1-9aca-44b8-a718-2c9a2221fbb7","name":"Адыгея"}];
}