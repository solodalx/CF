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
import * as outputAction from "../../common/actions/outputAction";

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
        //     // maxWidth: '50%',
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
    spravHeader: {
        width: 150,
    },
    spravRow: {
        height: 20,
        paddingTop: 0,
        paddingBottom: 0,
    },
    spravCellFirst: {
        borderBottom: 0,
    },
    spravCell: {
        borderBottom: 0,
        width: 140,
        paddingLeft: 12,
        paddingRight: 0,
    },
    tableRow: {
        '&:nth-of-type(odd)': {
            // backgroundColor: theme.palette.background.default,
            backgroundColor: '#f8fff8',
        },
    },
    tableCellFirst: {
        // width: 120,
        // [theme.breakpoints.down('xs')]: {
        //     minWidth: 50,
        //     maxWidth: 240,
        //     width: '100%',
        // },
        // [theme.breakpoints.up('sm')]: {
        //     width: 240,
        //     maxWidth: 240,
        // },
        paddingLeft: 12,
        // paddingRight: 12,
    },
    tableCell: {
        width: 140,
        // [theme.breakpoints.down('xs')]: {
        //     minWidth: 50,
        //     maxWidth: 140,
        //     width: '100%',
        // },
        // [theme.breakpoints.up('sm')]: {
        //     width: 140,
        //     maxWidth: 140,
        // },
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

function data(state) {
    return [
        {name: 'Снижение цены реализации за порцию до', value: 202, suffix: ' руб.'},
        {name: 'Снижение объема продаж в месяц до', value: 2430, suffix: ' порций'},
        {name: 'Рост издержек (за исключением амортизации) в месяц до', value: 410000, suffix: ' руб.'},
    ]
}

class OutputWidgetEfficiency extends React.Component {
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
                        title="Проект становится неэффективным при любом из нижеперечисленных условий*"
                    />
                    <CardContent>
                        <Divider/>
                        {/*<div className={classes.panel}>*/}
                            <Table>
                                <TableBody>
                                    {data(null).map(n => {
                                        return (
                                            <TableRow className={classes.tableRow}>
                                                <TableCell component='th' scope='row' className={classes.tableCellFirst}>
                                                    {n.name}
                                                </TableCell>
                                                <TableCell className={classes.tableCell}>
                                                    {/*{n.value + n.suffix}*/}
                                                    {number(n.value, n.suffix)}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        {/*</div>*/}
                        <Typography variant='caption'>
                            *NPV отрицателен на горизонте 60 месяцев.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        // output: store.outputState.output,
        outputState: store.outputState,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        outputAction: bindActionCreators(outputAction, dispatch),
    }
}

OutputWidgetEfficiency.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(OutputWidgetMain);
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(OutputWidgetEfficiency));
