import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
import * as modelAction from "../../common/actions/modelAction";

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
        [theme.breakpoints.down('xs')]: {
            minWidth: 50,
            maxWidth: 160,
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            width: 160,
            maxWidth: 160,
        },
        paddingLeft: 12,
        paddingRight: 0,
    },
});

function number(value, suffix) {
    return <NumberFormat
            value={value}
            thousandSeparator=' '
            // prefix="$"
            suffix={suffix}
            displayType={'text'}
        />;
}

function numberAndPrc(valueNumber, suffixNumber, valuePrc) {
    return <div>{number(valueNumber, suffixNumber)} / {valuePrc}%</div>
}

function head(state) {
    var fieldNames = ['Показатель / период'];
    var numberOfPeriods = data(state).map(o => o.values.length).reduce((a, b) => Math.max(a, b));
    for (let i = 1; i <= numberOfPeriods; i++) {
        fieldNames.push(i + ' год');
    }
    return fieldNames;
}

function data(state) {
    return [
        {name: 'Выручка', values: [8236, 9025, 9000, 9000]},
        {name: 'Себестоимость продаж', values: [2912, 3192, 3183, 3183]},
        {name: 'Коммерческие и управленческие расходы', values: [2634, 2889, 2889, 2889]},
        {name: 'Проценты к получению / уплате', values: [201, 161, 99, 38]},
        {name: 'Прочие доходы / расходы', values: [9, 10, 10, 10]},
        {name: 'Текущий налог на прибыль', values: [180, 180, 180, 180]},
        {name: 'Чистая прибыль (убыток)', values: [2299, 2592, 2638, 2699]},
    ]
}

class OutputWidgetPnL extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

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
                                            {head(null).map(n => {
                                                return (
                                                    <CustomTableCell className={classes.tableCell}>
                                                        {n}
                                                    </CustomTableCell>
                                                )
                                            })}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data(null).map(n => {
                                            return (
                                                <TableRow className={classes.tableRow}>
                                                    <CustomTableCell component='th' scope='row' className={classes.tableCellFirst}>
                                                        {n.name}
                                                    </CustomTableCell>
                                                    {n.values.map(v => {
                                                        return (
                                                            <CustomTableCell className={classes.tableCell}>
                                                                {v}
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
        // modelState: store.modelState,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // modelAction: bindActionCreators(modelAction, dispatch),
    }
}

OutputWidgetPnL.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(OutputWidgetMain);
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(OutputWidgetPnL));
