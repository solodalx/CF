import * as fields from './constants/fieldConstants'
import * as modelConstants from "./constants/modelConstants";
import {IS_DEBUG} from './properties';

export function setInitialState() {
    return {
        'flAssetsLand': '',
        'flAssetsBuildings': '',
        'flAssetsEquipment': '',
        'flAssetsTransport': '',
        'flAssetsIntangible': '',
        'flAssetsOthers': '',
        'flAssetsCash': '',
        'flAssetsTotal': 0,

        'flInvestLand': '',
        'flInvestBuildings': '',
        'flInvestEquipment': '',
        'flInvestTransport': '',
        'flInvestIntangible': '',
        'flInvestOthers': '',
        'flInvestTotal': 0,

        'flInvestmentsAll': '',
        'flInvestmentsAlreadyInvested': '',
        'flInvestmentsRatio': '',

        'flCalc001' : {
            'flAverageAmount': '',
            'flCustomerNumberPerMonth': '',
        },

        'flIncomeAveragePrice' : '',
        'flIncomeAverageSalesPerDay' : '',
        'flIncomePerMonth' : '',
        'flIncomeTotal' : 0,

    };
}

export function getValueById(model, fieldId) {
    if (IS_DEBUG) {
        console.log('NEPLOG: model: getValueById: id = ' + fieldId + ', model = ' + model);
        console.log(model);
    }

    switch (fieldId) {
        case fields.FL_ASSETS_LAND:                          return model.flAssetsLand;
        case fields.FL_ASSETS_BUILDINGS:                     return model.flAssetsBuildings;
        case fields.FL_ASSETS_EQUIPMENT:                     return model.flAssetsEquipment;
        case fields.FL_ASSETS_TRANSPORT:                     return model.flAssetsTransport;
        case fields.FL_ASSETS_INTANGIBLE:                    return model.flAssetsIntangible;
        case fields.FL_ASSETS_OTHERS:                        return model.flAssetsOthers;
        case fields.FL_ASSETS_CASH:                          return model.flAssetsCash;
        case fields.FL_ASSETS_TOTAL:                         return model.flAssetsTotal;

        case fields.FL_INVEST_LAND:                          return model.flInvestLand;
        case fields.FL_INVEST_BUILDINGS:                     return model.flInvestBuildings;
        case fields.FL_INVEST_EQUIPMENT:                     return model.flInvestEquipment;
        case fields.FL_INVEST_TRANSPORT:                     return model.flInvestTransport;
        case fields.FL_INVEST_INTANGIBLE:                    return model.flInvestIntangible;
        case fields.FL_INVEST_OTHERS:                        return model.flInvestOthers;
        case fields.FL_INVEST_TOTAL:                         return model.flInvestTotal;

        case fields.FL_INVESTMENTS_ALL:                      return model.flInvestmentsAll;
        case fields.FL_INVESTMENTS_ALREADY_INVESTED:         return model.flInvestmentsAlreadyInvested;
        case fields.FL_INVESTMENTS_RATIO:                    return model.flInvestmentsRatio;

        case fields.FL_CALC001.FL_AVERAGE_AMOUNT:            return model.flCalc001.flAverageAmount;
        case fields.FL_CALC001.FL_CUSTOMER_NUMBER_PER_MONTH: return model.flCalc001.flCustomerNumber;

        case fields.FL_INCOME_AVERAGE_PRICE:                 return model.flIncomeAveragePrice;
        case fields.FL_INCOME_AVERAGE_SALES_PER_DAY:         return model.flIncomeAverageSalesPerDay;
        case fields.FL_INCOME_PER_MONTH:                     return model.flIncomePerMonth;
        case fields.FL_INCOME_TOTAL:                         return model.flIncomeTotal;
    }
    return null;
}

function getPhase(fieldId) {
    switch (fieldId) {
        case fields.FL_ASSETS_LAND:
        case fields.FL_ASSETS_BUILDINGS:
        case fields.FL_ASSETS_EQUIPMENT:
        case fields.FL_ASSETS_TRANSPORT:
        case fields.FL_ASSETS_INTANGIBLE:
        case fields.FL_ASSETS_OTHERS:
        case fields.FL_ASSETS_CASH:
        case fields.FL_ASSETS_TOTAL:
        case fields.FL_INVEST_LAND:
        case fields.FL_INVEST_BUILDINGS:
        case fields.FL_INVEST_EQUIPMENT:
        case fields.FL_INVEST_TRANSPORT:
        case fields.FL_INVEST_INTANGIBLE:
        case fields.FL_INVEST_OTHERS:
        case fields.FL_INVEST_TOTAL:
        case fields.FL_INVESTMENTS_ALL:
        case fields.FL_INVESTMENTS_ALREADY_INVESTED:
        case fields.FL_INVESTMENTS_RATIO:
            return 2;

        case fields.FL_CALC001.FL_AVERAGE_AMOUNT:
        case fields.FL_CALC001.FL_CUSTOMER_NUMBER_PER_MONTH:
        case fields.FL_INCOME_AVERAGE_PRICE:
        case fields.FL_INCOME_AVERAGE_SALES_PER_DAY:
        case fields.FL_INCOME_PER_MONTH:
        case fields.FL_INCOME_TOTAL:
            return 3;
    }
    return null;
}

export function fieldUpdated(model, fieldId, value) {
    if (IS_DEBUG) {
        console.log('NEPLOG: model: fieldUpdated: id = ' + fieldId + ', value = ' + value + ', model = ' + model);
        console.log(model);
    }

    switch (getPhase(fieldId)) {
        case 2: return fieldUpdatedPhase2(model, fieldId, value);
        case 3: return fieldUpdatedPhase3(model, fieldId, value);
    }
}

function fieldUpdatedPhase2(model, fieldId, value) {
    var flAssetsLand = (model.flAssetsLand == '') ? 0 : parseInt(model.flAssetsLand);
    var flAssetsBuildings = (model.flAssetsBuildings == '') ? 0 : parseInt(model.flAssetsBuildings);
    var flAssetsEquipment = (model.flAssetsEquipment == '') ? 0 : parseInt(model.flAssetsEquipment);
    var flAssetsTransport = (model.flAssetsTransport == '') ? 0 : parseInt(model.flAssetsTransport);
    var flAssetsIntangible = (model.flAssetsIntangible == '') ? 0 : parseInt(model.flAssetsIntangible);
    var flAssetsOthers = (model.flAssetsOthers == '') ? 0 : parseInt(model.flAssetsOthers);
    var flAssetsCash = (model.flAssetsCash == '') ? 0 : parseInt(model.flAssetsCash);

    var flInvestLand = (model.flInvestLand == '') ? 0 : parseInt(model.flInvestLand);
    var flInvestBuildings = (model.flInvestBuildings == '') ? 0 : parseInt(model.flInvestBuildings);
    var flInvestEquipment = (model.flInvestEquipment == '') ? 0 : parseInt(model.flInvestEquipment);
    var flInvestTransport = (model.flInvestTransport == '') ? 0 : parseInt(model.flInvestTransport);
    var flInvestIntangible = (model.flInvestIntangible == '') ? 0 : parseInt(model.flInvestIntangible);
    var flInvestOthers = (model.flInvestOthers == '') ? 0 : parseInt(model.flInvestOthers);

    var intValue = (value == '') ? 0 : parseInt(value);
    switch (fieldId) {
        case fields.FL_ASSETS_LAND:                  flAssetsLand = intValue; break;
        case fields.FL_ASSETS_BUILDINGS:             flAssetsBuildings = intValue; break;
        case fields.FL_ASSETS_EQUIPMENT:             flAssetsEquipment = intValue; break;
        case fields.FL_ASSETS_TRANSPORT:             flAssetsTransport = intValue; break;
        case fields.FL_ASSETS_INTANGIBLE:            flAssetsIntangible = intValue; break;
        case fields.FL_ASSETS_OTHERS:                flAssetsOthers = intValue; break;
        case fields.FL_ASSETS_CASH:                  flAssetsCash = intValue; break;

        case fields.FL_INVEST_LAND:                  flInvestLand = intValue; break;
        case fields.FL_INVEST_BUILDINGS:             flInvestBuildings = intValue; break;
        case fields.FL_INVEST_EQUIPMENT:             flInvestEquipment = intValue; break;
        case fields.FL_INVEST_TRANSPORT:             flInvestTransport = intValue; break;
        case fields.FL_INVEST_INTANGIBLE:            flInvestIntangible = intValue; break;
        case fields.FL_INVEST_OTHERS:                flInvestOthers = intValue; break;
    }

    var flAssetsTotal = flAssetsLand + flAssetsBuildings + flAssetsEquipment + flAssetsTransport + flAssetsIntangible +  flAssetsOthers + flAssetsCash;
    var flInvestTotal = flInvestLand + flInvestBuildings + flInvestEquipment + flInvestTransport + flInvestIntangible + flInvestOthers;
    var flInvestmentsAll = flAssetsTotal + flInvestTotal;
    var flInvestmentsAlreadyInvested = flAssetsTotal;
    var flInvestmentsRatio = (flInvestmentsAll == 0) ? '' :
        (flInvestmentsAlreadyInvested / flInvestmentsAll * 100).toFixed(2) + '% / ' +
        ((flInvestmentsAll - flInvestmentsAlreadyInvested) / flInvestmentsAll * 100).toFixed(2) + '%'

    if (IS_DEBUG) {
        console.log('flAssetsLand = ' + flAssetsLand + ', flAssetsBuildings = ' + flAssetsBuildings + ', flAssetsEquipment = ' + flAssetsEquipment +
            ', flAssetsTransport = ' + flAssetsTransport + ', flAssetsIntangible = ' + flAssetsIntangible +
            ', flAssetsOthers = ' + flAssetsOthers + ', flAssetsCash = ' + flAssetsCash);
        console.log('flAssetsTotal = ' + flAssetsTotal + ', flInvestTotal = ' + flInvestTotal +
            ', flInvestmentsAll = ' + flInvestmentsAll + ', flInvestmentsAlreadyInvested = ' + flInvestmentsAlreadyInvested +
            ', flInvestmentsRatio = ' + flInvestmentsRatio);
    }

    return {
        ...model,
        'flAssetsLand': emptyIfZero(flAssetsLand),
        'flAssetsBuildings': emptyIfZero(flAssetsBuildings),
        'flAssetsEquipment': emptyIfZero(flAssetsEquipment),
        'flAssetsTransport': emptyIfZero(flAssetsTransport),
        'flAssetsIntangible': emptyIfZero(flAssetsIntangible),
        'flAssetsOthers': emptyIfZero(flAssetsOthers),
        'flAssetsCash': emptyIfZero(flAssetsCash),
        'flAssetsTotal': flAssetsTotal,

        'flInvestLand': emptyIfZero(flInvestLand),
        'flInvestBuildings': emptyIfZero(flInvestBuildings),
        'flInvestEquipment': emptyIfZero(flInvestEquipment),
        'flInvestTransport': emptyIfZero(flInvestTransport),
        'flInvestIntangible': emptyIfZero(flInvestIntangible),
        'flInvestOthers': emptyIfZero(flInvestOthers),
        'flInvestTotal': flInvestTotal,

        'flInvestmentsAll': emptyIfZero(flInvestmentsAll),
        'flInvestmentsAlreadyInvested': emptyIfZero(flInvestmentsAlreadyInvested),
        'flInvestmentsRatio': emptyIfZero(flInvestmentsRatio),
    };
}

function fieldUpdatedPhase3(model, fieldId, value) {
    var flCalc001AverageAmount = (model.flCalc001.flAverageAmount == '') ? 0 : parseInt(model.flCalc001.flAverageAmount);
    var flCalc001CustomerNumberPerMonth = (model.flCalc001.flCustomerNumberPerMonth == '') ? 0 : parseInt(model.flCalc001.flCustomerNumberPerMonth);

    var intValue = (value == '') ? 0 : parseInt(value);
    switch (fieldId) {
        case fields.FL_CALC001.FL_AVERAGE_AMOUNT:    flCalc001AverageAmount = intValue; break;
        case fields.FL_CALC001.FL_CUSTOMER_NUMBER_PER_MONTH:   flCalc001CustomerNumberPerMonth = intValue; break;
    }

    var flIncomeAveragePrice = flCalc001AverageAmount;
    var flIncomePerMonth = flCalc001AverageAmount * flCalc001CustomerNumberPerMonth;
    var flIncomeAverageSalesPerDay = (flCalc001CustomerNumberPerMonth * 12 / 365).toFixed(2);
    var flIncomeTotal = flIncomePerMonth;

    return {
        ...model,
        'flCalc001' : {
            'flAverageAmount': emptyIfZero(flCalc001AverageAmount),
            'flCustomerNumberPerMonth': emptyIfZero(flCalc001CustomerNumberPerMonth),
        },

        'flIncomeAveragePrice' : emptyIfZero(flIncomeAveragePrice),
        'flIncomeAverageSalesPerDay' : emptyIfZero(flIncomeAverageSalesPerDay),
        'flIncomePerMonth' : emptyIfZero(flIncomePerMonth),
        'flIncomeTotal' : flIncomeTotal,
    };
}

function emptyIfZero(value) {
    return value == 0 ? '' : value;
}
