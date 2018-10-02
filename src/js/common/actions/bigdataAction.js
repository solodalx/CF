// import axios from 'axios'
// import qs from 'qs';

import {post} from '../utils/http';
import * as properties from '../properties';
import {GET_BIGDATA_SUCCESS} from "../constants/bigdataConstants";

export function getBigdata(townId, businessAreaId, environmentId) {
    return (dispatch) => {
        if (properties.BACKEND_SERVER_IP != '') {
            let url = properties.BACKEND_SERVER_IP + properties.GET_BIGDATA_API;
            // let params = JSON.stringify({
            let params = {
                'areaId': townId,
                'businessTypeId': businessAreaId,
                'environmentId': environmentId,
            };
            // );
            // console.log('NEPLOG: bigdataAction: getBigdata(begin): url = ' + url + ', params = ' + params);
            // console.log(params);

            // let response = axios.post(url, params);
            // let response = axios.post(url, params, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         // 'Content-Type': 'text/plain',
            //         // 'Content-Type': 'application/x-www-form-urlencoded',
            //         // 'accept': 'application/json',
            //         // 'Access-Control-Allow-Origin': '*',
            //         // 'responseEncoding': 'utf8',
            //     },
            //     timeout: 15000,
            // });
            // let response = axios({
            //     method: 'post',
            //     url: url,
            //     data: params,
            // });
            // const options = {
            //     method: 'POST',
            //     // headers: { 'content-type': 'application/x-www-form-urlencoded' },
            //     // headers: { 'content-type': 'multipart/form-data' },
            //     headers: { 'content-type': 'application/json' },
            //     data: qs.stringify(params),
            //     url,
            // };
            // let response = axios(options);

            // console.log('NEPLOG: bigdataAction: getBigdata: response1 = ' + response);
            // console.log(response);
            // response
            post(url, params)
                .then(response => {
                    console.log('NEPLOG: bigdataAction: getBigdata: response = ' + response);
                    console.log(response);

                    dispatch({
                        type: GET_BIGDATA_SUCCESS,
                        data: response.data,
                    })
                })
                .catch(errorMessage => {
                    console.log('NEPLOG: bigdataAction: getBigdata: errorMessage = ' + errorMessage);
                });
            // console.log('NEPLOG: bigdataAction: getBigdata(end)');

            // get(url, params).then((response) => {
            // post(url, params)
            //     .then((response) => {
            //         console.log('NEPLOG: Bigdata REST response:');
            //         if (response.data) {
            //             console.log(response.data);
            //             return response.data;
            //         } else {
            //             console.log('NEPLOG: Bigdata REST response eror');
            //             Promise.reject('NEPLOG: Bigdata REST response error');
            //         }
            //     })
            //     .then((response) => {
            //         console.log('NEPLOG: Bigdata REST response 2:')
            //         if (response.success) {
            //             console.log(response.data);
            //             dispatch({
            //                 type: GET_BIGDATA_SUCCESS,
            //                 data: response.data,
            //             })
            //         } else {
            //             Promise.reject('NEPLOG: Bigdata REST response 2 error');
            //             return Promise.reject(response.message);
            //         }
            //     })
            //     .catch(errorMessage => {
            //         Promise.reject('NEPLOG: Bigdata REST response ERROR: ' + `${errorMessage}`);
            //     });
            // console.log('NEPLOG: bigdataAction: getBigdata(end)');

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
                type: GET_BIGDATA_SUCCESS,
                // data: []
                // data: 'Москва',
                data: getBigdataStatic(),
            })
        }
    }
}

function getBigdataStatic() {
    return [];
}