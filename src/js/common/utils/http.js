import axios from 'axios'

export function get(url, params, cancelToken) {
    let urlWithParams = (!params) ? url : url + addParams(params);
    return axios.get(urlWithParams, {cancelToken: cancelToken}).catch((error) => {
        if (!onError(error))
            return error;
    })
}

export function post(url, body) {
    return axios.post(url, body).catch((error) => {
        if (!onError(error))
            return error;
    })
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

