import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as outputAction from "../../common/actions/outputAction";
// import * as outputModelAction from "../../common/actions/outputModelAction";
import * as outputModel from "../../common/outputModel";
import {IS_DEBUG} from "../../common/properties";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Share from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUp from '@material-ui/icons/ThumbUp';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import NumberFormat from 'react-number-format';

const CustomTableCell = withStyles(theme => ({
    head: {
        // backgroundColor: theme.palette.common.black,
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
        //marginLeft: '15px',
        // height: 'auto',
    },
    scrollX: {
        overflowX: 'auto',
    },
    tableRow: {
        '&:nth-of-type(odd)': {
            // backgroundColor: theme.palette.background.default,
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

// function head(props) {
//     var fieldNames = ['Показатель / период'];
//     var numberOfPeriods = data(props).map(o => Object.keys(o.values).length).reduce((a, b) => Math.max(a, b), 0);
//     for (let i = 0; i < numberOfPeriods; i++) {
//         // fieldNames.push(i + ' год');
//         fieldNames.push(i + ' месяц');
//     }
//     if (IS_DEBUG) {
//         console.log('NEPLOG: OutputWidgetPnL: head: numberOfPeriods = ' + numberOfPeriods);
//     }
//     return fieldNames;
// }

// function data(props) {
//     if (IS_DEBUG) {
//         console.log('NEPLOG: OutputWidgetPnL: data: props = ' + props);
//         console.log(props);
//     }
//     if (props.output === undefined) return [];
//     if (props.output.pnlData === undefined) return [];
//     if (IS_DEBUG) {
//         console.log(props.output.pnlData.income);
//         console.log(Object.keys(props.output.pnlData.income).length);
//     }
//     return [
//         // {name: 'Выручка', values: [8236, 9025, 9000, 9000]},
//         // {name: 'Себестоимость продаж', values: [2912, 3192, 3183, 3183]},
//         // {name: 'Коммерческие и управленческие расходы', values: [2634, 2889, 2889, 2889]},
//         // {name: 'Проценты к получению / уплате', values: [201, 161, 99, 38]},
//         // {name: 'Прочие доходы / расходы', values: [9, 10, 10, 10]},
//         // {name: 'Текущий налог на прибыль', values: [180, 180, 180, 180]},
//         // {name: 'Чистая прибыль (убыток)', values: [2299, 2592, 2638, 2699]},
//         {name: 'Выручка', values: props.output.pnlData.income},
//         {name: 'Себестоимость продаж', values: props.output.pnlData.productionCosts},
//         {name: 'Управленческие расходы', values: props.output.pnlData.managementCosts},
//         {name: 'Накладные расходы', values: props.output.pnlData.fixedCosts},
//         {name: 'Проценты к получению / уплате', values: props.output.pnlData.loanCosts},
//         {name: 'Прочие доходы / расходы', values: props.output.pnlData.otherCosts},
//         // {name: 'Текущий налог на прибыль', values: [180, 180, 180, 180]},
//         {name: 'Чистая прибыль (убыток)', values: props.output.pnlData.netRevenue},
//     ]
// }

class OutputWidgetPnL extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;
        if (IS_DEBUG) {
            console.log('NEPLOG: OutputWidgetPnL: render: props = ' + this.props);
            console.log(this.props);
        }

        return (
            <div className={classes.cardCanvas}>
                <Card className={classes.card}>
                    <CardHeader
                        title="Отчет о финансовых результатах, тыс. руб."
                        // subheader="September 14, 2016"
                    />
                    {/*<CardContent>*/}
                    {/*</CardContent>*/}
                    {/*<CardActions className={classes.actions} disableActionSpacing>*/}
                        {/*<IconButton aria-label="Add to favorites">*/}
                            {/*<FavoriteIcon />*/}
                        {/*</IconButton>*/}
                        {/*<IconButton aria-label="Share">*/}
                            {/*<ShareIcon />*/}
                        {/*</IconButton>*/}
                        {/*<IconButton*/}
                            {/*className={classnames(classes.expand, {*/}
                                {/*[classes.expandOpen]: this.state.expanded,*/}
                            {/*})}*/}
                            {/*onClick={this.handleExpandClick}*/}
                            {/*aria-expanded={this.state.expanded}*/}
                            {/*aria-label="Show more"*/}
                        {/*>*/}
                            {/*<ExpandMoreIcon />*/}
                        {/*</IconButton>*/}
                    {/*</CardActions>*/}
                    {/*<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>*/}
                    <Collapse in={true}>
                        <CardContent>
                            <Divider/>
                            {/*<div className={classes.panel}>*/}
                            <div className={classes.scrollX}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            {(this.props.outputState.pnlHeader === undefined) ? <br/> :
                                                Object.values(this.props.outputState.pnlHeader).map(n => {
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
                                        {outputModel.getPnlData(this.props).map(n => {
                                            return (
                                                <TableRow className={classes.tableRow}>
                                                    <CustomTableCell component='th' scope='row' className={classes.tableCellFirst}>
                                                        {n.name}
                                                    </CustomTableCell>
                                                    {Object.values(n.values).map(v => {
                                                        return (
                                                            <CustomTableCell className={classes.tableCell}>
                                                                {(n.coef == null) ? number(Math.round(v)) : number(Math.round(v * n.coef))}
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
        // outputModel: store.outputModelState.output,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        outputAction: bindActionCreators(outputAction, dispatch),
        // outputModelAction: bindActionCreators(outputAction, dispatch),
    }
}

OutputWidgetPnL.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(OutputWidgetMain);
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(OutputWidgetPnL));
