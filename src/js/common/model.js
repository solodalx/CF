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
        // 'flAssetsCash': '',
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
        'flInvestmentsOwnCash': '',
        'flInvestmentsOwnAll': '',
        'flInvestmentsToBorrow': '',
        'flInvestmentsRatio': '',

        'flCalc001' : {
            'flAverageAmount': '',
            'flCustomerNumberPerMonth': '',
        },

        'flIncomeAveragePrice' : '',
        'flIncomeAverageSalesPerDay' : '',
        'flIncomePerMonth' : '',
        'flIncomeTotal' : 0,

        // 'flExpensesTaxes' : '',
        // 'flExpensesGrossMargin' : '',
        // 'flExpensesNetMargin' : '',
        'flExpensesIsManual' : 0,
        'flExpensesManual' : {
            'flManagementCount' : '',
            'flManagementSalary' : '',
            'flEmployeeCount' : '',
            'flEmployeeSalary' : '',
            'flRent' : '',
            'flTransport' : '',
            'flTaxes' : '',
            'flOthers' : '',
        },
        'flExpensesTotal' : '',

        'flParamsGrossMargin' : '',
        'flParamsNetMargin' : '',
        'flParamsLoanRate' : '',
        'flParamsDividents' : '',
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
        // case fields.FL_ASSETS_CASH:                          return model.flAssetsCash;
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
        case fields.FL_INVESTMENTS_OWN_CASH:                 return model.flInvestmentsOwnCash;
        case fields.FL_INVESTMENTS_OWN_ALL:                  return model.flInvestmentsOwnAll;
        case fields.FL_INVESTMENTS_TO_BORROW:                return model.flInvestmentsToBorrow;
        case fields.FL_INVESTMENTS_RATIO:                    return model.flInvestmentsRatio;

        case fields.FL_CALC001.FL_AVERAGE_AMOUNT:            return model.flCalc001.flAverageAmount;
        case fields.FL_CALC001.FL_CUSTOMER_NUMBER_PER_MONTH: return model.flCalc001.flCustomerNumber;

        case fields.FL_INCOME_AVERAGE_PRICE:                 return model.flIncomeAveragePrice;
        case fields.FL_INCOME_AVERAGE_SALES_PER_DAY:         return model.flIncomeAverageSalesPerDay;
        case fields.FL_INCOME_PER_MONTH:                     return model.flIncomePerMonth;
        case fields.FL_INCOME_TOTAL:                         return model.flIncomeTotal;

        // case fields.FL_EXPENSES_TAXES:                       return model.flExpensesTaxes;
        // case fields.FL_EXPENSES_GROSS_MARGIN:                return model.flExpensesGrossMargin;
        // case fields.FL_EXPENSES_NET_MARGIN:                  return model.flExpensesNetMargin;
        case fields.FL_EXPENSES_IS_MANUAL:                   return model.flExpensesIsManual;
        case fields.FL_EXPENSES_MANUAL.FL_MANAGEMENT_COUNT:  return model.flExpensesManual.flManagementCount;
        case fields.FL_EXPENSES_MANUAL.FL_MANAGEMENT_SALARY: return model.flExpensesManual.flManagementSalary;
        case fields.FL_EXPENSES_MANUAL.FL_EMPLOYEE_COUNT:    return model.flExpensesManual.flEmployeeCount;
        case fields.FL_EXPENSES_MANUAL.FL_EMPLOYEE_SALARY:   return model.flExpensesManual.flEmployeeSalary;
        case fields.FL_EXPENSES_MANUAL.FL_RENT:              return model.flExpensesManual.flRent;
        case fields.FL_EXPENSES_MANUAL.FL_TRANSPORT:         return model.flExpensesManual.flTransport;
        case fields.FL_EXPENSES_MANUAL.FL_TAXES:             return model.flExpensesManual.flTaxes;
        case fields.FL_EXPENSES_MANUAL.FL_OTHERS:            return model.flExpensesManual.flOthers;
        case fields.FL_EXPENSES_TOTAL:                       return model.flExpensesTotal;

        case fields.FL_PARAMS_GROSS_MARGIN:                  return model.flParamsGrossMargin;
        case fields.FL_PARAMS_NET_MARGIN:                    return model.flParamsNetMargin;
        case fields.FL_PARAMS_LOAN_RATE:                     return model.flParamsLoanRate;
        case fields.FL_PARAMS_DIVIDENTS:                     return model.flParamsDividents;

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
        // case fields.FL_ASSETS_CASH:
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
        case fields.FL_INVESTMENTS_OWN_CASH:
        case fields.FL_INVESTMENTS_OWN_ALL:
        case fields.FL_INVESTMENTS_TO_BORROW:
        case fields.FL_INVESTMENTS_RATIO:
            return 2;

        case fields.FL_CALC001.FL_AVERAGE_AMOUNT:
        case fields.FL_CALC001.FL_CUSTOMER_NUMBER_PER_MONTH:
        case fields.FL_INCOME_AVERAGE_PRICE:
        case fields.FL_INCOME_AVERAGE_SALES_PER_DAY:
        case fields.FL_INCOME_PER_MONTH:
        case fields.FL_INCOME_TOTAL:
            return 31;

        // case fields.FL_EXPENSES_TAXES:
        // case fields.FL_EXPENSES_GROSS_MARGIN:
        // case fields.FL_EXPENSES_NET_MARGIN:
        case fields.FL_EXPENSES_IS_MANUAL:
        case fields.FL_EXPENSES_MANUAL.FL_MANAGEMENT_COUNT:
        case fields.FL_EXPENSES_MANUAL.FL_MANAGEMENT_SALARY:
        case fields.FL_EXPENSES_MANUAL.FL_EMPLOYEE_COUNT:
        case fields.FL_EXPENSES_MANUAL.FL_EMPLOYEE_SALARY:
        case fields.FL_EXPENSES_MANUAL.FL_RENT:
        case fields.FL_EXPENSES_MANUAL.FL_TRANSPORT:
        case fields.FL_EXPENSES_MANUAL.FL_TAXES:
        case fields.FL_EXPENSES_MANUAL.FL_OTHERS:
        case fields.FL_EXPENSES_TOTAL:
            return 32;

        case fields.FL_PARAMS_GROSS_MARGIN:
        case fields.FL_PARAMS_NET_MARGIN:
        case fields.FL_PARAMS_LOAN_RATE:
        case fields.FL_PARAMS_DIVIDENTS:
            return 33;
    }
    return null;
}

export function getExpensesManual(model) {
    var checked = getValueById(model, fields.FL_EXPENSES_IS_MANUAL)
    switch (checked) {
        case 1:
            return true;
        case 0:
        default:
            return false;
    }
}

export function setExpensesManual(model, checked) {
    return fieldUpdatedPhase32(model, fields.FL_EXPENSES_IS_MANUAL, checked ? 1 : 0);
}

export function fieldUpdated(model, fieldId, value) {
    if (IS_DEBUG) {
        console.log('NEPLOG: model: fieldUpdated: id = ' + fieldId + ', value = ' + value + ', model = ' + model);
        console.log(model);
    }

    switch (getPhase(fieldId)) {
        case 2: return fieldUpdatedPhase2(model, fieldId, value);
        case 31: return fieldUpdatedPhase31(model, fieldId, value);
        case 32: return fieldUpdatedPhase32(model, fieldId, value);
        case 33: return fieldUpdatedPhase33(model, fieldId, value);
        default:
            if (IS_DEBUG) {
                console.log('NEPLOG: ERROR: no field id');
            }
            return model;
    }
}

function fieldUpdatedPhase2(model, fieldId, value) {
    var flAssetsLand = (model.flAssetsLand == '') ? 0 : parseInt(model.flAssetsLand);
    var flAssetsBuildings = (model.flAssetsBuildings == '') ? 0 : parseInt(model.flAssetsBuildings);
    var flAssetsEquipment = (model.flAssetsEquipment == '') ? 0 : parseInt(model.flAssetsEquipment);
    var flAssetsTransport = (model.flAssetsTransport == '') ? 0 : parseInt(model.flAssetsTransport);
    var flAssetsIntangible = (model.flAssetsIntangible == '') ? 0 : parseInt(model.flAssetsIntangible);
    var flAssetsOthers = (model.flAssetsOthers == '') ? 0 : parseInt(model.flAssetsOthers);
    // var flAssetsCash = (model.flAssetsCash == '') ? 0 : parseInt(model.flAssetsCash);

    var flInvestLand = (model.flInvestLand == '') ? 0 : parseInt(model.flInvestLand);
    var flInvestBuildings = (model.flInvestBuildings == '') ? 0 : parseInt(model.flInvestBuildings);
    var flInvestEquipment = (model.flInvestEquipment == '') ? 0 : parseInt(model.flInvestEquipment);
    var flInvestTransport = (model.flInvestTransport == '') ? 0 : parseInt(model.flInvestTransport);
    var flInvestIntangible = (model.flInvestIntangible == '') ? 0 : parseInt(model.flInvestIntangible);
    var flInvestOthers = (model.flInvestOthers == '') ? 0 : parseInt(model.flInvestOthers);

    var flInvestmentsOwnCash = (model.flInvestmentsOwnCash == '') ? 0 : parseInt(model.flInvestmentsOwnCash);

    var intValue = (value == '') ? 0 : parseInt(value);
    switch (fieldId) {
        case fields.FL_ASSETS_LAND:                  flAssetsLand = intValue; break;
        case fields.FL_ASSETS_BUILDINGS:             flAssetsBuildings = intValue; break;
        case fields.FL_ASSETS_EQUIPMENT:             flAssetsEquipment = intValue; break;
        case fields.FL_ASSETS_TRANSPORT:             flAssetsTransport = intValue; break;
        case fields.FL_ASSETS_INTANGIBLE:            flAssetsIntangible = intValue; break;
        case fields.FL_ASSETS_OTHERS:                flAssetsOthers = intValue; break;
        // case fields.FL_ASSETS_CASH:                  flAssetsCash = intValue; break;

        case fields.FL_INVEST_LAND:                  flInvestLand = intValue; break;
        case fields.FL_INVEST_BUILDINGS:             flInvestBuildings = intValue; break;
        case fields.FL_INVEST_EQUIPMENT:             flInvestEquipment = intValue; break;
        case fields.FL_INVEST_TRANSPORT:             flInvestTransport = intValue; break;
        case fields.FL_INVEST_INTANGIBLE:            flInvestIntangible = intValue; break;
        case fields.FL_INVEST_OTHERS:                flInvestOthers = intValue; break;

        case fields.FL_INVESTMENTS_OWN_CASH:         flInvestmentsOwnCash = intValue; break;
    }

    // var flAssetsTotal = flAssetsLand + flAssetsBuildings + flAssetsEquipment + flAssetsTransport + flAssetsIntangible +  flAssetsOthers + flAssetsCash;
    var flAssetsTotal = flAssetsLand + flAssetsBuildings + flAssetsEquipment + flAssetsTransport + flAssetsIntangible +  flAssetsOthers;
    var flInvestTotal = flInvestLand + flInvestBuildings + flInvestEquipment + flInvestTransport + flInvestIntangible + flInvestOthers;

    var flInvestmentsAll = flAssetsTotal + flInvestTotal;
    var flInvestmentsAlreadyInvested = flAssetsTotal;
    var flInvestmentsOwnAll = flInvestmentsAlreadyInvested + flInvestmentsOwnCash;
    var flInvestmentsToBorrow = flInvestmentsAll - flInvestmentsOwnAll;

    var flInvestmentsRatio = (flInvestmentsAll == 0) ? '' :
        (flInvestmentsOwnAll / flInvestmentsAll * 100).toFixed(2) + '% / ' +
        (flInvestmentsToBorrow / flInvestmentsAll * 100).toFixed(2) + '%'

    if (IS_DEBUG) {
        console.log('flAssetsLand = ' + flAssetsLand + ', flAssetsBuildings = ' + flAssetsBuildings + ', flAssetsEquipment = ' + flAssetsEquipment +
            ', flAssetsTransport = ' + flAssetsTransport + ', flAssetsIntangible = ' + flAssetsIntangible +
            ', flAssetsOthers = ' + flAssetsOthers);
        console.log('flAssetsTotal = ' + flAssetsTotal + ', flInvestTotal = ' + flInvestTotal +
            ', flInvestmentsAll = ' + flInvestmentsAll + ', flInvestmentsAlreadyInvested = ' + flInvestmentsAlreadyInvested +
            ', flInvestmentsOwnCash = ' + flInvestmentsOwnCash  + ', flInvestmentsOwnAll = ' + flInvestmentsOwnAll +
            ', flInvestmentsToBorrow = ' + flInvestmentsToBorrow + ', flInvestmentsRatio = ' + flInvestmentsRatio);
    }

    return {
        ...model,
        'flAssetsLand': emptyIfZero(flAssetsLand),
        'flAssetsBuildings': emptyIfZero(flAssetsBuildings),
        'flAssetsEquipment': emptyIfZero(flAssetsEquipment),
        'flAssetsTransport': emptyIfZero(flAssetsTransport),
        'flAssetsIntangible': emptyIfZero(flAssetsIntangible),
        'flAssetsOthers': emptyIfZero(flAssetsOthers),
        // 'flAssetsCash': emptyIfZero(flAssetsCash),
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
        'flInvestmentsOwnCash': emptyIfZero(flInvestmentsOwnCash),
        'flInvestmentsOwnAll': emptyIfZero(flInvestmentsOwnAll),
        'flInvestmentsToBorrow': emptyIfZero(flInvestmentsToBorrow),
        'flInvestmentsRatio': emptyIfZero(flInvestmentsRatio),
    };
}

function fieldUpdatedPhase31(model, fieldId, value) {
    var flCalc001AverageAmount = (model.flCalc001.flAverageAmount == '') ? 0 : parseInt(model.flCalc001.flAverageAmount);
    var flCalc001CustomerNumberPerMonth = (model.flCalc001.flCustomerNumberPerMonth == '') ? 0 : parseInt(model.flCalc001.flCustomerNumberPerMonth);

    var intValue = (value == '') ? 0 : parseInt(value);
    switch (fieldId) {
        case fields.FL_CALC001.FL_AVERAGE_AMOUNT:               flCalc001AverageAmount = intValue; break;
        case fields.FL_CALC001.FL_CUSTOMER_NUMBER_PER_MONTH:    flCalc001CustomerNumberPerMonth = intValue; break;
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

function fieldUpdatedPhase32(model, fieldId, value) {
    // var flExpensesTaxes = (model.flExpensesTaxes == '') ? 0 : parseInt(model.flExpensesTaxes);
    // var flExpensesGrossMargin = (model.flExpensesGrossMargin == '') ? 0 : parseInt(model.flExpensesGrossMargin);
    // var flExpensesNetMargin = (model.flExpensesNetMargin == '') ? 0 : parseInt(model.flExpensesNetMargin);
    var flExpensesIsManual =(model.flExpensesIsManual == '') ? 0 : parseInt(model.flExpensesIsManual);
    var flExpensesManualManagementCount = (model.flExpensesManual.flManagementCount == '') ? 0 : parseInt(model.flExpensesManual.flManagementCount);
    var flExpensesManualManagementSalary = (model.flExpensesManual.flManagementSalary == '') ? 0 : parseInt(model.flExpensesManual.flManagementSalary);
    var flExpensesManualEmployeeCount = (model.flExpensesManual.flEmployeeCount == '') ? 0 : parseInt(model.flExpensesManual.flEmployeeCount);
    var flExpensesManualEmployeeSalary = (model.flExpensesManual.flEmployeeSalary == '') ? 0 : parseInt(model.flExpensesManual.flEmployeeSalary);
    var flExpensesManualRent = (model.flExpensesManual.flRent == '') ? 0 : parseInt(model.flExpensesManual.flRent);
    var flExpensesManualTransport = (model.flExpensesManual.flTransport == '') ? 0 : parseInt(model.flExpensesManual.flTransport);
    var flExpensesManualTaxes = (model.flExpensesManual.flTaxes == '') ? 0 : parseInt(model.flExpensesManual.flTaxes);
    var flExpensesManualOthers = (model.flExpensesManual.flOthers == '') ? 0 : parseInt(model.flExpensesManual.flOthers);

    var intValue = (value == '') ? 0 : parseInt(value);
    switch (fieldId) {
        // case fields.FL_EXPENSES_TAXES:                          flExpensesTaxes = intValue; break;
        // case fields.FL_EXPENSES_GROSS_MARGIN:                   flExpensesGrossMargin = intValue; break;
        // case fields.FL_EXPENSES_NET_MARGIN:                     flExpensesNetMargin = intValue; break;
        case fields.FL_EXPENSES_IS_MANUAL:                      flExpensesIsManual = intValue; break;
        case fields.FL_EXPENSES_MANUAL.FL_MANAGEMENT_COUNT:     flExpensesManualManagementCount = intValue; break;
        case fields.FL_EXPENSES_MANUAL.FL_MANAGEMENT_SALARY:    flExpensesManualManagementSalary = intValue; break;
        case fields.FL_EXPENSES_MANUAL.FL_EMPLOYEE_COUNT:       flExpensesManualEmployeeCount = intValue; break;
        case fields.FL_EXPENSES_MANUAL.FL_EMPLOYEE_SALARY:      flExpensesManualEmployeeSalary = intValue; break;
        case fields.FL_EXPENSES_MANUAL.FL_RENT:                 flExpensesManualRent = intValue; break;
        case fields.FL_EXPENSES_MANUAL.FL_TRANSPORT:            flExpensesManualTransport = intValue; break;
        case fields.FL_EXPENSES_MANUAL.FL_TAXES:                flExpensesManualTaxes = intValue; break;
        case fields.FL_EXPENSES_MANUAL.FL_OTHERS:               flExpensesManualOthers = intValue; break;
    }

    var flExpensesTotal = 0;
    if (flExpensesIsManual == 1) {
        flExpensesTotal =
            flExpensesManualManagementCount * flExpensesManualManagementSalary +
            flExpensesManualEmployeeCount * flExpensesManualEmployeeSalary +
            flExpensesManualRent + flExpensesManualTransport + flExpensesManualTaxes + flExpensesManualOthers;
    }

    return {
        ...model,
        // 'flExpensesTaxes' : emptyIfZero(flExpensesTaxes),
        // 'flExpensesGrossMargin' : emptyIfZero(flExpensesGrossMargin),
        // 'flExpensesNetMargin' : emptyIfZero(flExpensesNetMargin),
        'flExpensesIsManual' : flExpensesIsManual,
        'flExpensesManual' : {
            'flManagementCount' : emptyIfZero(flExpensesManualManagementCount),
            'flManagementSalary' : emptyIfZero(flExpensesManualManagementSalary),
            'flEmployeeCount' : emptyIfZero(flExpensesManualEmployeeCount),
            'flEmployeeSalary' : emptyIfZero(flExpensesManualEmployeeSalary),
            'flRent' : emptyIfZero(flExpensesManualRent),
            'flTransport' : emptyIfZero(flExpensesManualTransport),
            'flTaxes' : emptyIfZero(flExpensesManualTaxes),
            'flOthers' : emptyIfZero(flExpensesManualOthers),
        },
        'flExpensesTotal' : emptyIfZero(flExpensesTotal),
    };
}

function fieldUpdatedPhase33(model, fieldId, value) {
    var flParamsGrossMargin = (model.flParamsGrossMargin == '') ? 0 : parseInt(model.flParamsGrossMargin);
    var flParamsNetMargin = (model.flParamsNetMargin == '') ? 0 : parseInt(model.flParamsNetMargin);
    var flParamsLoanRate = (model.flParamsLoanRate == '') ? 0 : parseInt(model.flParamsLoanRate);
    var flParamsDividents = (model.flParamsDividents == '') ? 0 : parseInt(model.flParamsDividents);

    var intValue = (value == '') ? 0 : parseInt(value);
    switch (fieldId) {
        case fields.FL_PARAMS_GROSS_MARGIN:                flParamsGrossMargin = intValue; break;
        case fields.FL_PARAMS_NET_MARGIN:                  flParamsNetMargin = intValue; break;
        case fields.FL_PARAMS_LOAN_RATE:                   flParamsLoanRate = intValue; break;
        case fields.FL_PARAMS_DIVIDENTS:                   flParamsDividents = intValue; break;
    }

    return {
        ...model,
        'flParamsGrossMargin' : emptyIfZero(flParamsGrossMargin),
        'flParamsNetMargin' : emptyIfZero(flParamsNetMargin),
        'flParamsLoanRate' : emptyIfZero(flParamsLoanRate),
        'flParamsDividents' : emptyIfZero(flParamsDividents),
    };
}

function emptyIfZero(value) {
    return value == 0 ? '' : value;
}
