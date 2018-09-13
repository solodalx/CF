import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import {Chart} from 'chart.js';

import * as modelAction from "../../common/actions/modelAction";
import {IS_DEBUG} from "../../common/properties";
import * as outputAction from "../../common/actions/outputAction";

const styles = theme => ({
    cardCanvas: {
        padding: '6px',
    },
    card: {
    },
    chartCanvas: {
        [theme.breakpoints.down('xs')]: {
            minWidth: 576,
        },
    },
    scrollX: {
        [theme.breakpoints.down('xs')]: {
            overflowX: 'auto',
        },
    },
});

function repeateArray(obj, count) {
    let ret = [];
    for (let i = 0; i < count; i++)
        ret.push(obj);
    return ret;
}

function labels(state) {
    var fieldNames = [];
    var numberOfPeriods = data(state).map(o => o.data.length).reduce((a, b) => Math.max(a, b));
    for (let i = 1; i <= numberOfPeriods; i++) {
        fieldNames.push(i + ' месяц');
    }
    return fieldNames;
}

function data(state) {
    return [{
    //     label: 'Инвестиции',
    //     data: [100,
    //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     ],
    //     yAxisID: 'axis1',
    //     type: 'bar',
    //     borderColor: 'rgb(32, 128, 235)',
    //     backgroundColor: repeateArray('rgba(32, 128, 235, 0.8)', 49),
    //     borderWidth: 1,
    //     barPercentage: 1.0,
    //     stack: 1,
    // }, {
    //     label: 'Выдача кредита',
    //     data: [1750,
    //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     ],
    //     yAxisID: 'axis1',
    //     type: 'bar',
    //     borderColor: 'rgb(75, 192, 192)',
    //     backgroundColor: repeateArray('rgba(75, 192, 192, 0.8)', 49),
    //     borderWidth: 1,
    //     barPercentage: 1.0,
    //     stack: 1,
    // }, {
        label: 'Дивиденды',
        data: [//0,
            -50, -50, -50, -50, -50, -50, -50, -50, -50, -50, -50, -50,
            -50, -50, -50, -50, -50, -50, -50, -50, -50, -50, -50, -50,
            -50, -50, -50, -50, -50, -50, -50, -50, -50, -50, -50, -50,
            -50, -50, -50, -50, -50, -50, -50, -50, -50, -50, -50, -50,
        ],
        yAxisID: 'axis1',
        type: 'bar',
        borderColor: 'rgb(32, 128, 235)',
        backgroundColor: repeateArray('rgba(32, 128, 235, 0.2)', 48),
        borderWidth: 1,
        // barPercentage: 0.5,
        stack: 2,
    }, {
        label: 'Погашение ОД',
        data: [//0,
            -36.458, -36.458, -36.458, -36.458, -36.458, -36.458, -36.458, -36.458,
            -36.458, -36.458, -36.458, -36.458, -36.458, -36.458, -36.458, -36.458,
            -36.458, -36.458, -36.458, -36.458, -36.458, -36.458, -36.458, -36.458,
            -36.458, -36.458, -36.458, -36.458, -36.458, -36.458, -36.458, -36.458,
            -36.458, -36.458, -36.458, -36.458, -36.458, -36.458, -36.458, -36.458,
            -36.458, -36.458, -36.458, -36.458, -36.458, -36.458, -36.458, -36.458,
        ],
        yAxisID: 'axis1',
        type: 'bar',
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: repeateArray('rgba(75, 192, 192, 0.2)', 48),
        borderWidth: 1,
        // barPercentage: 0.5,
        stack: 2,
    }, {
        label: 'Погашение %',
        data: [//0,
            -20.417, -19.991, -19.566, -19.141, -18.715, -18.29, -17.865, -17.439, -17.014, -16.589,
            -16.163, -15.738, -15.313, -14.887, -14.462, -14.036, -13.611, -13.186, -12.760, -12.335, -11.910,
            -11.484, -11.059, -10.634, -10.208, -9.783, -9.358, -8.932, -8.507, -8.082, -7.656, -7.231, -6.806,
            -6.380, -5.955, -5.529, -5.104, -4.679, -4.253, -3.828, -3.403, -2.977, -2.552, -2.127, -1.701,
            -1.276, -0.851, -0.425],
        yAxisID: 'axis1',
        type: 'bar',
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: repeateArray('rgba(255, 99, 132, 0.2)', 48),
        borderWidth: 1,
        // barPercentage: 0.5,
        stack: 2,
    }]
}

// function adjustMinMax(state) {
//     let coef = 1.5;
//     let max = data(state)
//         .map(c => {return {
//             stack: c.stack,
//             max: c.data.reduce((m, v) => Math.max(m, v))
//         }})
//         //.reduce((m, v) => Math.max(m, v));
//     let min = data(state)
//         .map(c =>
//             c.data.reduce((m, v) => Math.min(m, v))
//         )
//         .reduce((m, v) => Math.min(m, v));
//
//     // if (max > 0 && Math.abs(max) > coef * Math.abs(min))
//     //     max = coef * Math.abs(min);
//     // else if (min < 0 && Math.abs(min) > coef * Math.abs(max))
//     //     min = -coef * Math.abs(max);
//     return {
//         min: min,
//         max: max,
//     }
// }

// Chart.Tooltip.positioners.custom = function(elements, eventPosition) {
//     /** @type {Chart.Tooltip} */
//     var tooltip = this;
//     /* ... */
//     return {
//         x: eventPosition.x,
//         y: eventPosition.y,
//     };
// }

class OutputWidgetChartFinFlow extends React.Component {

    componentDidMount = (event) => {
        var ctx = document.getElementById("outputWidgetChartFinFlow").getContext('2d');
        // console.log('NEP: OutputWidgetChartFinFlow: componentDidMount: adjustMinMax');
        // console.log(adjustMinMax(null));
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels(null),
                datasets: data(null),
            },
            options: {
                scales: {
                    // xAxes: [{
                    //     staked: 'true',
                    // }],
                    yAxes: [{
                        id: 'axis1',
                        // type: 'logarithmic',
                        stacked: 'true',
                        // ticks: {
                            // suggestedMin: 50,
                            // suggestedMax: 200
                            // min: undefined,//adjustMinMax(null).max,
                            // max: 300,//adjustMinMax(null).max,
                        // }
                    // }, {
                    //     id: 'axis2',
                    //     position: 'right',
                    //     stacked: 'true',
                    }],
                },
                // tooltips: {
                //     position: 'custom',
                // }
            }
        });
        // if (myChart.options.scales.yAxes.ticks.max)
        // console.log('NEP: OutputWidgetChartFinFlow: componentDidMount: myChart');
        // console.log(myChart.options.scales.yAxes.ticks.max);
        // console.log(myChart.options.scales.yAxes.ticks.min);
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.cardCanvas}>
                <Card className={classes.card}>
                    <CardHeader
                        title="График возврата инвестиций"
                    />
                    {/*<CardContent>*/}
                    {/*</CardContent>*/}
                    <Collapse in={true}>
                        <CardContent>
                            <Divider/>
                            <div className={classes.scrollX}>
                                <div className={classes.chartCanvas}>
                                    <canvas id="outputWidgetChartFinFlow"></canvas>
                                </div>
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        output: store.outputState.output,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        outputAction: bindActionCreators(outputAction, dispatch),
    }
}

OutputWidgetChartFinFlow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(OutputWidgetChartFinFlow));
