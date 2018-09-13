import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as outputAction from "../../common/actions/outputAction";
import * as outputModel from "../../common/outputModel";
import {IS_DEBUG} from "../../common/properties";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import {Chart} from 'chart.js';


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

// function labels(state) {
//     var fieldNames = [];
//     var numberOfPeriods = data(state).map(o => o.data.length).reduce((a, b) => Math.max(a, b));
//     for (let i = 0; i < numberOfPeriods; i++) {
//         fieldNames.push(i + ' год');
//     }
//     return fieldNames;
// }

function getData(props) {
    if (props.outputState.output == null) return [];
    if (props.outputState.output.pnlData == null) return [];
    if (props.outputState.output.cfData == null) return [];

    return [{
        label: 'Выручка',
        // data: [0, 8236, 9025, 9000, 9000],
        data: Object.values(props.outputState.output.pnlData.income),
        yAxisID: 'axis1',
        // type: 'line',
        type: 'bar',
        borderColor: 'rgb(75, 192, 192)',
        // backgroundColor: ['rgba(75, 192, 192, 0.2)',],
        backgroundColor: repeateArray('rgba(75, 192, 192, 0.2)', Object.values(props.outputState.output.pnlData.income).length),
        fill: 'false',
        borderWidth: 1,
    // }, {
    //     label: 'Расходы',
    //     data: [0, 5757, 6253, 6182, 6121],
    //     type: 'line',
    //     borderColor: 'rgb(255, 99, 132)',
    //     backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //     ],
    //     fill: 'false',
    //     borderWidth: 1,
    // }, {
    //     label: 'Прибыль (убыток) от продаж',
    //     // data: [0, 2479, 2772, 2818, 2879],
    //     data: Object.values(props.outputState.output.pnlData.ebit),
    //     type: 'line',
    //     borderColor: 'rgb(153, 102, 255)',
    //     backgroundColor: [
    //         'rgba(153, 102, 255, 0.2)',
    //     ],
    //     fill: 'false',
    //     borderWidth: 1,
    //     borderDash: [3, 3],
    // }, {
    //     label: 'Налог',
    //     data: [0, 180, 180, 180, 180],
    //     type: 'line',
    //     borderColor: 'rgb(255, 159, 64)',
    //     backgroundColor: [
    //         'rgba(255, 159, 64, 0.2)',
    //     ],
    //     fill: 'false',
    //     borderWidth: 1,
    //     borderDash: [3, 3],
    // }, {
    //     label: 'Чистая прибыль (убыток)',
    //     // data: [0, 2299, 2592, 2638, 2699],
    //     data: Object.values(props.outputState.output.pnlData.netRevenue),
    //     type: 'line',
    //     borderColor: 'rgb(54, 162, 235)',
    //     backgroundColor: [
    //         'rgba(54, 162, 235, 0.2)',
    //     ],
    //     fill: 'false',
    //     borderWidth: 1,
    }, {
        label: 'Рентабельность',
        // data: [0, 2299, 2592, 2638, 2699],
        data: Object.values(props.outputState.output.pnlData.actualReturn ),
        yAxisID: 'axis2',
        type: 'line',
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
        ],
        fill: 'false',
        borderWidth: 1,
    // }, {
    //     label: 'Инвестиции',
    //     data: [-7000, 0, 0, 0, 0],
    //     type: 'bar',
    //     borderColor: 'rgb(32, 128, 235)',
    //     backgroundColor: [
    //         'rgba(32, 128, 235, 0.5)',
    //         'rgba(32, 128, 235, 0.5)',
    //         'rgba(32, 128, 235, 0.5)',
    //         'rgba(32, 128, 235, 0.5)',
    //         'rgba(32, 128, 235, 0.5)',
    //     ],
    //     borderWidth: 1,
    // }, {
    //     label: 'CF',
    //     // data: [-7000, 2299, 2592, 2638, 2699],
    //     data: (props.outputState.output.cfData.financialFlow == null) ? [] : Object.values(props.outputState.output.cfData.financialFlow.out.total),
    //     type: 'bar',
    //     borderColor: 'rgb(54, 162, 235)',
    //     backgroundColor: repeateArray('rgba(54, 162, 235, 0.2)', Object.values(props.outputState.output.cfData.financialFlow.out.total).length),
    //     borderWidth: 1,
    }, {
        label: 'NPV',
        // data: [-7000, -4701, -2109, 529, 3228],
        data: Object.values(props.outputState.output.cfData.npv),
        yAxisID: 'axis1',
        type: 'line',
        borderColor: 'rgb(75, 192, 64)',
        backgroundColor: [
            'rgba(255, 192, 64, 0.1)',
            'rgba(255, 192, 64, 0.1)',
            'rgba(255, 192, 64, 0.1)',
            'rgba(255, 192, 64, 0.1)',
            'rgba(255, 192, 64, 0.1)',
        ],
        borderWidth: 1,
    }]
}

class OutputWidgetChart extends React.Component {

    // componentDidMount = (event) => {
    componentDidUpdate = (event) => {
        if (IS_DEBUG) {
            console.log('NEPLOG: OutputWidgetChart: componentDidMount: props = ' + this.props);
            console.log(this.props);
        }
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                // labels: labels(null),
                labels: Object.values(this.props.outputState.pnlCfLabels),
                datasets: getData(this.props),
                // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                // datasets: [{
                //     label: 'Bar',
                //     data: [12, 19, 3, 5, 2, 3],
                //     backgroundColor: [
                //         'rgba(255, 99, 132, 0.2)',
                //         'rgba(54, 162, 235, 0.2)',
                //         'rgba(255, 206, 86, 0.2)',
                //         'rgba(75, 192, 192, 0.2)',
                //         'rgba(153, 102, 255, 0.2)',
                //         'rgba(255, 159, 64, 0.2)'
                //     ],
                //     borderColor: [
                //         'rgba(255,99,132,1)',
                //         'rgba(54, 162, 235, 1)',
                //         'rgba(255, 206, 86, 1)',
                //         'rgba(75, 192, 192, 1)',
                //         'rgba(153, 102, 255, 1)',
                //         'rgba(255, 159, 64, 1)'
                //     ],
                //     borderWidth: 1,
                //     type: 'line',
                // }, {
                //     label: 'Line',
                //     data: [12, 19, 3, 5, 2, 3],
                //     backgroundColor: [
                //         'rgba(255, 99, 132, 0.2)',
                //         'rgba(54, 162, 235, 0.2)',
                //         'rgba(255, 206, 86, 0.2)',
                //         'rgba(75, 192, 192, 0.2)',
                //         'rgba(153, 102, 255, 0.2)',
                //         'rgba(255, 159, 64, 0.2)'
                //     ],
                //     borderColor: [
                //         'rgba(255,99,132,1)',
                //         'rgba(54, 162, 235, 1)',
                //         'rgba(255, 206, 86, 1)',
                //         'rgba(75, 192, 192, 1)',
                //         'rgba(153, 102, 255, 1)',
                //         'rgba(255, 159, 64, 1)'
                //     ],
                //     borderWidth: 1,
                //     type: 'bar',
                //     fill: 'false',
                // }]
            },
            options: {
                scales: {
                    yAxes: [{
                        id: 'axis1',
                        ticks: {
                            beginAtZero:true
                        }
                    }, {
                        id: 'axis2',
                        position: 'right',
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    };

    render() {
        const { classes } = this.props;
        if (IS_DEBUG) {
            console.log('NEPLOG: OutputWidgetChart: render: props = ' + this.props);
            console.log(this.props);
        }

        return (
            <div className={classes.cardCanvas}>
                <Card className={classes.card}>
                    <CardHeader
                        title="Основные финансовые показатели проекта"
                    />
                    {/*<CardContent>*/}
                    {/*</CardContent>*/}
                    <Collapse in={true}>
                        <CardContent>
                            <Divider/>
                            <div className={classes.scrollX}>
                                <div className={classes.chartCanvas}>
                                    {/*<canvas id="myChart" width="400" height="300"></canvas>*/}
                                    <canvas id="myChart"></canvas>
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
        outputState: store.outputState,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        outputAction: bindActionCreators(outputAction, dispatch),
    }
}

OutputWidgetChart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(OutputWidgetChart));
