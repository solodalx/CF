import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as outputAction from "../../common/actions/outputAction";
import * as outputModel from "../../common/outputModel";
import {IS_DEBUG} from "../../common/properties";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import green from '@material-ui/core/colors/green';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import NumberFormat from 'react-number-format';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#9dcb9a',
        color: theme.palette.common.white,
    },
    body: {
        // fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    cardCanvas: {
        padding: '6px',
    },
    card: {
        // maxWidth: 400,
        // [theme.breakpoints.down('sm')]: {
        //     minWidth: 150,
        //     maxWidth: 500,
        //     width: '100%',
        // },
        // [theme.breakpoints.up('md')]: {
        //     // maxWidth: 500,
        // },
        // margin: 6,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: green[700],
    },

    panel: {
        padding: '15px',
        background: '#FFFFFF',
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        borderRadius: '25px !important',
        margin: '10px',
        width: '95%'
    },
    scrollX: {
        overflowX: 'auto',
    },
    tableRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f8fff8',
        },
    },
    tableCellFirst: {
        // width: 120,
        [theme.breakpoints.down('xs')]: {
            minWidth: 50,
            maxWidth: 240,
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            width: 240,
            // maxWidth: 240,
        },
        paddingLeft: 12,
        // paddingRight: 12,
    },
    tableCell: {
        // width: 160,
        textAlign: 'right',
        [theme.breakpoints.down('xs')]: {
            minWidth: 80,
            maxWidth: 180,
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            width: 180,
            maxWidth: 180,
        },
        paddingLeft: 12,
        paddingRight: 12,
    },
});

function number(value, suffix) {
    return <span className='text-nowrap'>
        <NumberFormat
            value={value}
            thousandSeparator=' '
            // prefix="$"
            suffix={suffix}
            displayType={'text'}
        />
    </span>
}

function numberAndPrc(valueNumber, suffixNumber, valuePrc) {
    return <div>{number(valueNumber, suffixNumber)} / {valuePrc}%</div>
}

// function head(state) {
//     var fieldNames = ['Показатель / период'];
//     var numberOfPeriods = data(state).map(o => o.values.length).reduce((a, b) => Math.max(a, b));
//     for (let i = 1; i <= numberOfPeriods; i++) {
//         fieldNames.push(i + ' год');
//     }
//     return fieldNames;
// }

// function data(state) {
//     return [
//         {name: 'Денежные средства на начало периода', values: [0, 1501, 3056, 4656]},
//         {name: 'Операционный поток', values: [2653, 2753, 2737, 2737]},
//         {name: 'Инвестиционный поток', values: [-1850, 0, 0, 0]},
//         {name: 'Финансовый поток', values: [698, 1198, -1137, -1076]},
//         {name: 'Чистый денежный поток', values: [1501, 1555, 1600, 1661]},
//         {name: 'Остаток денежных средств на конец периода', values: [1501, 3056, 4656, 6318]},
//         {name: 'NVP', values: [449, 801, 1910, 2901]},
//     ]
// }

class OutputWidgetCF extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;
        if (IS_DEBUG) {
            console.log('NEPLOG: OutputWidgetCF: render: props = ' + this.props);
            console.log(this.props);
        }

        return (
            <div className={classes.cardCanvas}>
                <Card className={classes.card}>
                    <CardHeader
                        title="Отчет о движении денежных средств, тыс. руб."
                    />
                    <Collapse in={true}>
                        <CardContent>
                            <Divider/>
                            {/*<div className={classes.panel}>*/}
                            <div className={classes.scrollX}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            {(this.props.outputState.cfHeader === undefined) ? <br/> :
                                                Object.values(this.props.outputState.cfHeader).map(n => {
                                                    return (
                                                        <CustomTableCell className={classes.tableCell}>
                                                            {n}
                                                        </CustomTableCell>
                                                    )
                                                })
                                            }
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {outputModel.getCfData(this.props).map(n => {
                                            return (
                                                <TableRow className={classes.tableRow}>
                                                    <CustomTableCell component='th' scope='row' className={classes.tableCellFirst}>
                                                        {n.name}
                                                    </CustomTableCell>
                                                    {Object.values(n.values).map(v => {
                                                        return (
                                                            <CustomTableCell className={classes.tableCell}>
                                                                {number(Math.round(v))}
                                                            </CustomTableCell>
                                                        )
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
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

OutputWidgetCF.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(OutputWidgetMain);
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(OutputWidgetCF));
