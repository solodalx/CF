import {IS_DEBUG} from './properties';
import React from "react";
import TableRow from "@material-ui/core/TableRow";

export function getPnlHeader(output, suffix) {
    // var fieldNames = [];
    // var numberOfPeriods = output.pnlData.map(o => Object.keys(o).length).reduce((a, b) => Math.max(a, b), 0);
    // for (let i = 0; i < numberOfPeriods; i++) {
    //     // fieldNames.push(i + ' год');
    //     fieldNames.push(i + ' месяц');
    // }
    // if (IS_DEBUG) {
    //     console.log('NEPLOG: OutputModel: getPnlHeader: numberOfPeriods = ' + numberOfPeriods + ', fieldNames =');
    //     console.log(fieldNames);
    // }
    // return fieldNames;
    var header = {firstColumn: 'Показатель / период'};
    Object.keys(output.pnlData.income).forEach(
        (k, i) => header[k] = i + (suffix === undefined ? ' период' : ' ' + suffix)
    );
    if (IS_DEBUG) {
        console.log('NEPLOG: outputModel: getPnlHeader: header = ' + header);
        console.log(header);
    }
    return header;
}

export function getCfHeader(output, suffix) {
    var header = {firstColumn: 'Показатель / период'};
    Object.keys(output.cfData.moneyAtStart).forEach(
        (k, i) => header[k] = i + (suffix === undefined ? ' период' : ' ' + suffix)
    );
    if (IS_DEBUG) {
        console.log('NEPLOG: outputModel: getCfHeader: header = ' + header);
        console.log(header);
    }
    return header;
}

export function getPnlCfLabels(output, suffix) {
    var header = {};
    Object.keys(output.pnlData.income).forEach(
        (k, i) => header[k] = i + (suffix === undefined ? ' период' : ' ' + suffix)
    );
    if (IS_DEBUG) {
        console.log('NEPLOG: outputModel: getPnlCfLabels: header = ' + header);
        console.log(header);
    }
    return header;
}

export function getPnlData(props) {
    if (IS_DEBUG) {
        console.log('NEPLOG: outputModel: getPnlData: props = ' + props);
        console.log(props);
    }
    if (props.outputState.output == null) return [];
    if (props.outputState.output.pnlData == null) return [];
    if (IS_DEBUG) {
        console.log(props.outputState.output.pnlData.income);
        console.log(Object.keys(props.outputState.output.pnlData.income).length);
    }
    return [
        {name: 'Выручка', values: props.outputState.output.pnlData.income},
        {name: 'Себестоимость продаж', values: props.outputState.output.pnlData.productionCosts},
        {name: 'Управленческие расходы', values: props.outputState.output.pnlData.managementCosts},
        {name: 'Накладные расходы', values: props.outputState.output.pnlData.fixedCosts},
        {name: 'Проценты к получению / уплате', values: props.outputState.output.pnlData.loanCosts, coef: -1},
        {name: 'Прочие доходы / расходы', values: props.outputState.output.pnlData.otherCosts, coef: -1},
        // {name: 'Текущий налог на прибыль', values: [180, 180, 180, 180]},
        {name: 'Чистая прибыль (убыток)', values: props.outputState.output.pnlData.netRevenue},
    ]
}

export function getCfData(props) {
    if (props.outputState.output == null) return [];
    if (props.outputState.output.cfData == null) return [];
    return [
        {name: 'Денежные средства на начало периода', values: props.outputState.output.cfData.moneyAtStart},
        {name: 'Операционный поток', values:
                (props.outputState.output.cfData.operationalFlow == null) ? [] :
                    props.outputState.output.cfData.operationalFlow.net},
        {name: 'Инвестиционный поток', values:
                (props.outputState.output.cfData.investmentsFlow == null) ? [] :
                    props.outputState.output.cfData.investmentsFlow.net},
        {name: 'Финансовый поток', values:
                (props.outputState.output.cfData.financialFlow == null) ? [] :
                    props.outputState.output.cfData.financialFlow.net},
        {name: 'Чистый денежный поток', values: props.outputState.output.cfData.netCashFlow},
        {name: 'Остаток денежных средств на конец периода', values: props.outputState.output.cfData.moneyAtEnd},
        {name: 'NPV', values: props.outputState.output.cfData.npv},
    ]
}

