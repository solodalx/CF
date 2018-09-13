import {IS_DEBUG} from './properties';

export const initialModelState = {
    // Step 1
    commons: {
        regions: '',
        towns: '',
        businessArea: '',
        environment: '',
    },

    // Step 2
    existingAssets: {
        land: '',
        buildings: '',
        equipment: '',
        transport: '',
        intangible: '',
        others: '',
    },
    plannedAssets: {
        land: '',
        buildings: '',
        equipment: '',
        transport: '',
        intangible: '',
        others: '',
    },
    invest: {
        // investments: '',
        // alreadyInvested: '',
        ownCash: '',
        // ratio: '',
        loanRate: '',
    },

    // Step 3
    calculators: {
        1: {
            averageAmount: '',
            customerNumberPerDay: '',
        }
    },

    income: {
    },

    expenses: {
        isManual: false,
        managementCount: 0,
        managementSalary: 0,
        employeeCount: 0,
        employeeSalary: 0,
        rent: 0,
        transport: 0,
        taxes: 0,
        others: 0,
    },

    finance: {
        isManualGrossProfitability: false,
        grossProfitability: '',
        dividents: '',
    },
}

// export function getValue(state, field) {
//     // if (IS_DEBUG) {
//     //     console.log('NEPLOG: model: getValue: modelState = ' + modelState + ', field = ' + field);
//     //     console.log(modelState);
//     // }
//     if (state == undefined || state == '' || field == undefined || field == '')
//         return '';
//     return field.split(':').reduce((parent, child) =>
//         (parent == undefined || parent == '') ? '' : parent[child], state);
// }
//
export function updateState(state, field, value) {
    // var newState = {...state, [blockName]: {...state[blockName], [fieldName]: value}};
    // var newState = {...state, step2: {...state.step2, [blockName]: {...state.step2[blockName], [fieldName]: value}}};
    // 'step2:existingAssets:land'
    if (state == undefined || state == '' || field == undefined || field == '')
        return state;
    var index = field.indexOf(':');
    var newState;
    if (IS_DEBUG) {
        console.log('NEPLOG: model: updateState: state = ' + state + ', field = ' + field + ', value = ' + value + ', index = ' + index);
        console.log(state);
    }

    if (index == -1) {
        newState = {...state, [field]: value};
    }
    else {
        var fieldBlock = field.slice(0, index);
        var fieldRest = field.slice(index + 1);
        var childState = state[fieldBlock];
        // if (IS_DEBUG) {
        //     console.log('fieldBlock = ' + fieldBlock + ', fieldRest = ' + fieldRest + ', childState = ' + childState);
        //     console.log(childState);
        // }
        newState = {...state, [fieldBlock]: updateState(childState, fieldRest, value)};
    }
    // if (IS_DEBUG) {
    //     console.log('newState = ' + newState);
    //     console.log(newState);
    // }
    return newState;
}

export function copyBigdataToFields(state, props) {
    if (state == undefined || state == '' || props.modelState == undefined || props.modelState == '' || props.bigdata == undefined || props.bigdata == '')
        return state;
    // const value = getStep3IncomeTotal(state, calcNumber) * (getStep3GrossProfitability(props) - getStep3NetProfitability(props, calcNumber));
    const value = N(getStep3IncomeTotal(state, 0)) *
        (N(getStep3GrossProfitability(props)) - N(getStep3NetProfitability(props, 0)));
    return {
        ...state,
        expenses: {
            ...state.expenses,
            managementCount: 1,
            managementSalary: props.bigdata.calculatedCostsDto.csWageManagement * value,
            employeeCount: 1,
            employeeSalary: props.bigdata.calculatedCostsDto.csWageProduction * value,
            rent: props.bigdata.calculatedCostsDto.csInfrastructure * value,
            transport: props.bigdata.calculatedCostsDto.csTransport * value,
            taxes: props.bigdata.calculatedCostsDto.csTaxes * value,
            others: props.bigdata.calculatedCostsDto.csOther * value,
        }
    }
}

export function getTotal(block) {
    // if (IS_DEBUG) {
    //     console.log('NEPLOG: model: getTotal: block = ' + block);
    //     console.log(block);
    // }
    let sum = 0;
    Object.keys(block).forEach(k => sum += intOrZeroIfEmpty(block[k]));
    // block.keys.forEach(key => {
    //     if (IS_DEBUG) {
    //         console.log('current = ' + key + ', block[current] = ' + block[key]);
    //     }
    //     return sum += intOrZeroIfEmpty(block[key]);
    // });
    return sum;
}

export function getStep2InvestmentsAll(state) {
    return getTotal(state.existingAssets) + getTotal(state.plannedAssets);
}

export function getStep2AlreadyInvested(state) {
    return getTotal(state.existingAssets);
}

export function getStep2OwnAll(state) {
    var investmentsAll = getStep2InvestmentsAll(state);
    var alreadyInvested = getStep2AlreadyInvested(state);
    var ownAll = alreadyInvested + intOrZeroIfEmpty(state.invest.ownCash);
    if (ownAll > investmentsAll) ownAll = investmentsAll;
    return ownAll;
}

export function getStep2ToBorrow(state) {
    var investmentsAll = getStep2InvestmentsAll(state);
    var ownAll = getStep2OwnAll(state);
    var toBorrow = investmentsAll - ownAll;
    return toBorrow;
}

export function getStep2Ratio(state) {
    var investmentsAll = getStep2InvestmentsAll(state);
    var ownAll = getStep2OwnAll(state);
    var toBorrow = getStep2ToBorrow(state);

    var ratio = (investmentsAll == 0) ? '' :
        (ownAll / investmentsAll * 100).toFixed(2) + '% / ' +
        (toBorrow / investmentsAll * 100).toFixed(2) + '%';
    return ratio;
}

// export function getStep3AveragePrice(state, calcNumber) {
//     switch(calcNumber) {
//         case 0:
//             return intOrZeroIfEmpty(state.calculators["1"].averageAmount);
//     }
//     return 0;
// }

export function getStep3AverageSalesPerMonth(state, calcNumber) {
    switch(calcNumber) {
        case 0:
            return (intOrZeroIfEmpty(state.calculators["1"].customerNumberPerDay) * 365 / 12).toFixed(2);
    }
    return 0;
}

export function getStep3IncomePerMonth(state, calcNumber) {
    switch(calcNumber) {
        case 0:
            // return getStep3AveragePrice(state, calcNumber) * intOrZeroIfEmpty(state.calculators["1"].customerNumberPerDay);
            // return (getStep3AveragePrice(state, calcNumber) * getStep3AverageSalesPerMonth(state, calcNumber)).toFixed(2);
            return (intOrZeroIfEmpty(state.calculators["1"].averageAmount) * getStep3AverageSalesPerMonth(state, calcNumber)).toFixed(2);
    }
    return 0;
}

export function getStep3IncomeTotal(state, calcNumber) {
   return getStep3IncomePerMonth(state, calcNumber);
}



///////////////////////////
// Step 3 - Profitabilities
///////////////////////////

export function getStep3GrossProfitabilityFromBigDataPrc(props) {
    // return (64.63).toFixed(2);
    // return (props.bigdata.grossProfitability * 100).toFixed(2);
    return N(props.bigdata.grossProfitability) * 100;
}

function getStep3GrossProfitability(props) {
    return (
        props.modelState.finance.isManualGrossProfitability ?
            // intOrZeroIfEmpty(props.modelState.finance.grossProfitability) :
            N(props.modelState.finance.grossProfitability) :
            // getStep3GrossProfitabilityFromBigDataPrc(props)) / 100;
            N(getStep3GrossProfitabilityFromBigDataPrc(props))
    ) / 100;
}

export function getStep3NetProfitabilityPrc(props, calcNumber) {
    if (props.modelState.expenses.isManual) {
        if (IS_DEBUG) {
            console.log('NEPLOG: model: getStep3NetProfitabilityPrc: props = ' + props + ', calcNumber = ' + calcNumber);
            console.log(props);
            console.log('getStep3IncomeTotal = ' + getStep3IncomeTotal(props.modelState, calcNumber) +
                ', getStep3ExpensesTotal = ' + getStep3ExpensesTotal(props, calcNumber) +
                ', getStep3GrossProfitability = ' + getStep3GrossProfitability(props));
        }
        return (
            // (getStep3IncomeTotal(state, calcNumber) * (1 - getStep3GrossProfitability(state)) - getStep3ExpensesTotal(state)) /
            // getStep3IncomeTotal(state, calcNumber) * 100).toFixed(2);

            // [Выр - (Выр * (1 - Вал.рент) + Расх)] / Выр * 100
            // = [Выр * Вал.рент - Расх] / Выр * 100
            // = [Вал.рен - Расх/Выр] * 100

            // (N(getStep3IncomeTotal(props.modelState, calcNumber)) -
            //     (N(getStep3IncomeTotal(props.modelState, calcNumber)) * (1 - N(getStep3GrossProfitability(props))) +
            //         N(getStep3ExpensesTotal(props, calcNumber))
            //     )
            // ) /

            // (Выр - Расх) / Выр
            (N(getStep3IncomeTotal(props.modelState, calcNumber)) - N(getStep3ExpensesTotal(props, calcNumber))) /
                N(getStep3IncomeTotal(props.modelState, calcNumber)) *
                100
        // ).toFixed(2);
        );
    }
    else {
        // return (18.31).toFixed(2);
        // return (props.bigdata.netProfitability * 100).toFixed(2);
        // return (props.bigdata.netPortability * 100).toFixed(2);
        return (N(props.bigdata.netPortability) * 100);
    }
}

function getStep3NetProfitability(props, calcNumber) {
    return N(getStep3NetProfitabilityPrc(props, calcNumber)) / 100;
}



////////////////////
// Step 3 - Expenses
////////////////////

export function getStep3ExpensesTotal(props, calcNumber) {
    if (props.modelState.expenses.isManual) {
        return round(
            N(getStep3IncomeTotal(props.modelState, calcNumber)) * (1 - N(getStep3GrossProfitability(props))) +
            N(props.modelState.expenses.managementCount) * N(props.modelState.expenses.managementSalary) +
            N(props.modelState.expenses.employeeCount) * N(props.modelState.expenses.employeeSalary) +
            N(props.modelState.expenses.rent) +
            N(props.modelState.expenses.transport) +
            N(props.modelState.expenses.taxes) +
            N(props.modelState.expenses.others)
        );
    }
    else {
        return (
            // getStep3IncomeTotal(state, calcNumber) -
            // (getStep3IncomeTotal(state, calcNumber) * (1 - getStep3GrossProfitability(state))) -
            // getStep3IncomeTotal(state, calcNumber) * getStep3NetProfitability(state, calcNumber)
            N(getStep3IncomeTotal(props.modelState, calcNumber)) * (1 - N(getStep3NetProfitability(props, calcNumber)))
        // ).toFixed(2);
        );
    }
}

export function getStep3PrimeCost(props, calcNumber) {
    // if (state.expenses.isManual) {
    //     return intOrZeroIfEmpty(state.expenses.managementCount) * intOrZeroIfEmpty(state.expenses.managementSalary) +
    //         intOrZeroIfEmpty(state.expenses.employeeCount) * intOrZeroIfEmpty(state.expenses.employeeSalary) +
    //         intOrZeroIfEmpty(state.expenses.rent) +
    //         intOrZeroIfEmpty(state.expenses.transport) +
    //         intOrZeroIfEmpty(state.expenses.taxes) +
    //         intOrZeroIfEmpty(state.expenses.others);
    // }
    // else {
        return (
            N(getStep3IncomeTotal(props.modelState, calcNumber)) * (1 - N(getStep3GrossProfitability(props)))
        // ).toFixed(2);
        );
    // }
}

// function getStep3ExpensesCoef(props, calcNumber) {
//     return (
//         N(getStep3IncomeTotal(props.modelState, calcNumber)) * (
//             N(getStep3GrossProfitability(props)) - N(getStep3NetProfitability(props, calcNumber))
//         )
//     )
// }

// export function getStep3ExpensesRentFromBigData(props, calcNumber) {
//     return (
//         props.bigdata.calculatedCostsDto === undefined ?
//             undefined :
//             props.bigdata.calculatedCostsDto.csInfrastructure * getStep3ExpensesCoef(props, calcNumber)
//     );
// }


////////
// Utils
////////

function emptyIfZero(value) {
    return value == 0 ? '' : value;
}

function intOrZeroIfEmpty(value) {
    return value == '' ? 0 : parseInt(value);
}

var filterFloat = function(value) {
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
        .test(value))
        return Number(value);
    return NaN;
}

function N(value) {
    return isNaN(value) ? 0 : Number(value);
}

function round(value, number = 2) {
    return parseFloat(value.toFixed(number));
}
