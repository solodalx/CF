import axios from 'axios'
import {IS_DEBUG} from '../../common/properties';

export function get(url, params, cancelToken) {
    let urlWithParams = (!params) ? url : url + addParams(params);
    return axios.get(urlWithParams, {cancelToken: cancelToken}).catch((error) => {
        if (!onError(error))
            return error;
    })
}

export function post(url, body) {
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    if (IS_DEBUG) {
        console.log('NEPLOG: https: post: url = ' + url + ', body = ' + body);
        console.log(body);
    }
    let response = axios.post(url, body).catch((error) => {
        if (!onError(error)) {
            console.log('NEPLOG: https: post: error = ' + error);
            console.log(error);
            return error;
        }
    });
    if (IS_DEBUG) {
        console.log('NEPLOG: https: post: response = ' + response);
        console.log(response);
    }
    return response;
}

export function put(url, body) {
    return axios.put(url, body).catch((error) => {
        if (!onError(error))
            return error;
    })
}

export function deleteR(url, body) {
    return axios.delete(url, body).catch((error) => {
        if (!onError(error))
            return error;
    })
}

function onError(error) {
    if (error.message) {
        console.log(error.message);
        return true;
    }
}

function addParams(params) {
    return "?" + Object.entries(params)
        .map((val) => val.join("="))
        .join("&");
}

