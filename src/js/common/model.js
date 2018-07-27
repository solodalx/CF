import {IS_DEBUG} from './properties';

export const initialModelState = {
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
        managementCount: '',
        managementSalary: '',
        employeeCount: '',
        employeeSalary: '',
        rent: '',
        transport: '',
        taxes: '',
        others: '',
    },

    finance: {
        isManualGrossMargin: false,
        grossMargin: '',
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

export function getStep3AveragePrice(state, calcNumber) {
    switch(calcNumber) {
        case 0:
            return intOrZeroIfEmpty(state.calculators["1"].averageAmount);
    }
    return 0;
}

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
            return (getStep3AveragePrice(state, calcNumber) * getStep3AverageSalesPerMonth(state, calcNumber)).toFixed(2);
    }
    return 0;
}

export function getStep3IncomeTotal(state, calcNumber) {
   return getStep3IncomePerMonth(state, calcNumber);
}

export function getStep3GrossMarginFromBigDataPrc(state) {
    return (30.00).toFixed(2);
}

function getStep3GrossMargin(state) {
    return (state.finance.isManualGrossMargin ? intOrZeroIfEmpty(state.finance.grossMargin) : getStep3GrossMarginFromBigDataPrc(state)) / 100;
}

export function getStep3NetMarginPrc(state, calcNumber) {
    if (state.expenses.isManual) {
        return (
            // (getStep3IncomeTotal(state, calcNumber) * (1 - getStep3GrossMargin(state)) - getStep3ExpensesTotal(state)) /
            // getStep3IncomeTotal(state, calcNumber) * 100).toFixed(2);
            (getStep3IncomeTotal(state, calcNumber) -
                (getStep3IncomeTotal(state, calcNumber) * (1 - getStep3GrossMargin(state)) +
                    getStep3ExpensesTotal(state)
                )
            ) /
            getStep3IncomeTotal(state, calcNumber) *
            100
        ).toFixed(2);
    }
    else {
        return (10.00).toFixed(2);
    }
}

export function getStep3ExpensesTotal(state, calcNumber) {
    if (state.expenses.isManual) {
        return intOrZeroIfEmpty(state.expenses.managementCount) * intOrZeroIfEmpty(state.expenses.managementSalary) +
            intOrZeroIfEmpty(state.expenses.employeeCount) * intOrZeroIfEmpty(state.expenses.employeeSalary) +
            intOrZeroIfEmpty(state.expenses.rent) +
            intOrZeroIfEmpty(state.expenses.transport) +
            intOrZeroIfEmpty(state.expenses.taxes) +
            intOrZeroIfEmpty(state.expenses.others);
    }
    else {
        return (
            getStep3IncomeTotal(state, calcNumber) -
            (getStep3IncomeTotal(state, calcNumber) * (1 - getStep3GrossMargin(state))) -
            getStep3IncomeTotal(state, calcNumber) * getStep3NetMargin(state, calcNumber)
        ).toFixed(2);
    }
}

function getStep3NetMargin(state, calcNumber) {
    return getStep3NetMarginPrc(state, calcNumber) / 100;
}

function emptyIfZero(value) {
    return value == 0 ? '' : value;
}

function intOrZeroIfEmpty(value) {
    return value == '' ? 0 : parseInt(value);
}
