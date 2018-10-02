import {get} from '../utils/http';
import * as properties from '../properties';
import {GET_ENVIRONMENT_SUCCESS} from "../constants/environmentConstants";
import {IS_DEBUG} from "../properties";

export function getEnvironment() {
    return (dispatch) => {
        if (properties.BACKEND_SERVER_IP != '') {
            let url = properties.BACKEND_SERVER_IP + properties.GET_ENVIRONMENT_API

            get(url).then((response) => {
                if (IS_DEBUG) {
                    console.log('NEPLOG: Environment REST response:')
                    console.log(response.data);
                }
                dispatch({
                    type: GET_ENVIRONMENT_SUCCESS,
                    data: response.data,
                })
            })
        }
        else {
            dispatch({
                type: GET_ENVIRONMENT_SUCCESS,
                data: getEnvironmentStatic(),
            })
        }
    }
}


function getEnvironmentStatic() {
    return [{"id":"fe95b2d9-c5a5-412e-8c4f-56877f222d30","name":"Центр города"},{"id":"dae33e6c-cdd9-4168-ae13-b408692cc969","name":"Деловой район (не центр)"},{"id":"9f6ca3d2-6022-4245-9bed-9124b20c260c","name":"Спальный район"},{"id":"f9602da2-ef85-461c-aad3-b45be4d9b5bd","name":"Сельская местность"}];
}