import {get} from '../utils/http';
import * as properties from '../properties';
import {GET_REGIONS_SUCCESS} from "../constants/regionsConstants";
import {GET_TOWNS_SUCCESS} from "../constants/townsConstants";
import {IS_DEBUG} from "../properties";

export function getTowns() {
    return (dispatch) => {
        if (properties.BACKEND_SERVER_IP != '') {
            let regionsUrl = 'http://' + properties.BACKEND_SERVER_IP + properties.GET_REGIONS_API
            let regions = null;
            get(regionsUrl).then((response) => {
                if (IS_DEBUG) {
                    console.log('NEPLOG: Regions REST response:')
                    console.log(response.data);
                }
                regions = response.data;
                dispatch({
                    type: GET_REGIONS_SUCCESS,
                    data: response.data,
                })
            })

            let url = 'http://' + properties.BACKEND_SERVER_IP + properties.GET_TOWNS_API
            get(url).then((response) => {
                if (IS_DEBUG) {
                    console.log('NEPLOG: Towns REST response:')
                    console.log(response.data);
                }

                const suggestions = getTownsSuggestions(response.data, regions);
                dispatch({
                    type: GET_TOWNS_SUCCESS,
                    data: response.data,
                    suggestions: suggestions,
                })
            })
        }
        else {
            dispatch({
                type: GET_TOWNS_SUCCESS,
                data: getTownsStatic(),
                suggestions: getTownsSuggestions0(getTownsStatic()),
            })
        }
    }
}

function getTownsStatic() {
    return [{"id":"2b689598-b5d1-4497-9526-60e2edb0f0ee","bigDataId":null,"name":"Алексеевка","population":39026,"regionId":"65d20880-959a-4818-bc2b-46b6332cbc86","districtId":"24838648-ec8c-4309-9f02-1dd1c7cd6c14"},{"id":"86f94010-a04b-4faa-925b-b91caf0c6062","bigDataId":null,"name":"Белгород","population":356426,"regionId":"65d20880-959a-4818-bc2b-46b6332cbc86","districtId":"24838648-ec8c-4309-9f02-1dd1c7cd6c14"},{"id":"77a07e69-c5f7-42d6-b480-0b4a0b5a9253","bigDataId":null,"name":"Бирюч","population":7842,"regionId":"65d20880-959a-4818-bc2b-46b6332cbc86","districtId":"24838648-ec8c-4309-9f02-1dd1c7cd6c14"},{"id":"be6ef0e3-9b64-4077-a65b-b6a3c8fe5285","bigDataId":null,"name":"Валуйки","population":35322,"regionId":"65d20880-959a-4818-bc2b-46b6332cbc86","districtId":"24838648-ec8c-4309-9f02-1dd1c7cd6c14"},{"id":"fbff1615-f63a-4934-b012-d1a50bb17779","bigDataId":null,"name":"Грайворон","population":6234,"regionId":"65d20880-959a-4818-bc2b-46b6332cbc86","districtId":"24838648-ec8c-4309-9f02-1dd1c7cd6c14"},{"id":"d295a747-7758-4987-b09b-70a76a6a7ff1","bigDataId":null,"name":"Губкин","population":88562,"regionId":"65d20880-959a-4818-bc2b-46b6332cbc86","districtId":"24838648-ec8c-4309-9f02-1dd1c7cd6c14"},{"id":"8c425dec-0570-43cc-b370-d81457354e4c","bigDataId":null,"name":"Короча","population":5877,"regionId":"65d20880-959a-4818-bc2b-46b6332cbc86","districtId":"24838648-ec8c-4309-9f02-1dd1c7cd6c14"}];
}

function getTownsSuggestions0(towns) {
    return towns.map(town => ({
        value: town.id,
        label: town.name,
    }))
}

function getTownsSuggestions(towns, regions) {
    // if (IS_DEBUG) {
    //     console.log('NEPLOG: InputForm: getTownsSuggestions: towns = ' + towns + ' regions = ' + regions);
    //     console.log(towns);
    //     console.log(regions);
    // }
    return towns.map(town => {
        let region = regions.find(r => r.id === town.regionId)
        return {
            value: town.id,
            label: (region.name == town.name) ? town.name : region.name + ', ' + town.name,
        }
    })
}
