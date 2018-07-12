import {get} from '../http';
import * as properties from '../properties';
import {GET_BUSINESSAREA_SUCCESS} from "../constants/businessAreaConstants";

export function getBusinessArea() {
    return (dispatch) => {
        if (properties.BACKEND_SERVER_IP != '') {
            let url = 'http://' + properties.BACKEND_SERVER_IP + properties.GET_BUSINESSAREA_API

            get(url).then((response) => {
                console.log('Business Area REST response:')
                console.log(response.data);

                dispatch({
                    type: GET_BUSINESSAREA_SUCCESS,
                    data: response.data,
                })
            })
        }
        else {
            dispatch({
                type: GET_BUSINESSAREA_SUCCESS,
                data: getBusinessAreaStatic(),
            })
        }
    }
}


function getBusinessAreaStatic() {
    return [{"uuid":"336386f4-ffc0-4b2a-b706-273447efefc9","mainName":"Общественное питание","detailedName":"Кафе","description":"Небольшие кафе становятся очень популярными среди современной молодежи.","incomeCalcType":2,"businessId":1,"quantityName":"посетитель(-ей)","isDisplayLink":false},{"uuid":"e9636330-a27b-4711-89c8-6ca8cfaf726e","mainName":"Общественное питание","detailedName":"Ресторан","description":null,"incomeCalcType":1,"businessId":1,"quantityName":"посетители, чел.","isDisplayLink":false},{"uuid":"bbd099c8-58a3-4797-b552-5dbadd18b940","mainName":"Общественное питание","detailedName":"Кофейня","description":null,"incomeCalcType":1,"businessId":1,"quantityName":"посетители, чел.","isDisplayLink":false},{"uuid":"d5fd9c41-84f9-4567-8506-7655f3386062","mainName":"Общественное питание","detailedName":"Бар","description":null,"incomeCalcType":1,"businessId":1,"quantityName":"посетители, чел.","isDisplayLink":false},{"uuid":"2a99a3c1-c2fb-486d-8ab0-c53c6ea1eb8f","mainName":"Общественное питание","detailedName":"Бургерная","description":null,"incomeCalcType":1,"businessId":1,"quantityName":"порции","isDisplayLink":false},{"uuid":"822e47ce-b2f4-44a3-90c1-efa5a7f069c3","mainName":"Общественное питание","detailedName":"Кондитерская","description":null,"incomeCalcType":1,"businessId":1,"quantityName":"товары, шт.","isDisplayLink":false},{"uuid":"89e5a344-ec73-497b-b0a6-7531c5ec9d38","mainName":"Общественное питание","detailedName":"Столовая","description":null,"incomeCalcType":1,"businessId":1,"quantityName":"порции","isDisplayLink":false},{"uuid":"b1e7771b-aafb-4fb9-ad40-11849115c09b","mainName":"Торговля","detailedName":"Интернет-магазин","description":null,"incomeCalcType":1,"businessId":1,"quantityName":"товары, шт.","isDisplayLink":false},{"uuid":"ca8e258e-5d4d-455a-b9e7-63bbc56019ac","mainName":"Торговля","detailedName":"Магазин одежды и обуви","description":null,"incomeCalcType":1,"businessId":1,"quantityName":"товары, шт.","isDisplayLink":false},{"uuid":"d7a5d83f-0def-4823-bac1-c838f98d98c6","mainName":"Торговля","detailedName":"Продуктовый магазин у дома","description":null,"incomeCalcType":1,"businessId":1,"quantityName":"покупатели, чел.","isDisplayLink":false}];
}