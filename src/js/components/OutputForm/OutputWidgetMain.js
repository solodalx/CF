import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as outputAction from "../../common/actions/outputAction";
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

// function getValue(props, field) {
//     // let val = '';
//     // try {
//         if (IS_DEBUG) {
//             console.log('NEPLOG: OutputWidgetMain: getValue: props = ' + props + ' field = ' + field + ' props.output[field] = ' + props.output[field]);
//             console.log(props);
//             console.log(props.output[field]);
//         }
//         // val = 555;
//         return props.output[field];
//     // } catch (e) {
//     //     console.log('NEPLOG: OutputWidgetMain: getValue: errorMessage = ' + e.message);
//     // }
//     // return val;
// }

function data(props) {
    return [
        // {name: 'Точка безубыточности, единиц продукции в мес.', value: 1527, suffix: ' ед.'},
        // {name: 'Срок окупаемости (PBP)', value: 14, suffix: ' мес.'},
        // {name: 'Ставка дисконтирования', value: 15, suffix: '%'},
        // {name: 'Дисконтированный срок окупаемости (DPBP)', value: 16, suffix: ' мес.'},
        // {name: 'Чистая приведенная стоимость (NPV)', value: 2984335, suffix: ' руб.'},
        // {name: 'Внутренняя норма доходности (IRR)', value: 5.75, suffix: '%'},
        // {name: 'Точка безубыточности, единиц продукции в мес.', value: getValue(props, 'pop1'), suffix: ' ' + getValue(props, 'popMeasure')},
        {name: 'Точка безубыточности, единиц продукции в мес.', value: read(props.outputState.output.projectEfficiency, 'pop'), suffix: ' ' + read(props.outputState.output.projectEfficiency, 'popMeasure')},
        {name: 'Срок окупаемости (PBP)', value: read(props.outputState.output.projectEfficiency, 'pbp'), suffix: ' мес.'},
        {name: 'Ставка дисконтирования', value: 15, suffix: '%'},
        {name: 'Дисконтированный срок окупаемости (DPBP)', value: read(props.outputState.output.projectEfficiency, 'dpbp'), suffix: ' мес.'},
        {name: 'Чистая приведенная стоимость (NPV)', value: read(props.outputState.output.projectEfficiency, 'npv'), suffix: ' руб.'},
        {name: 'Внутренняя норма доходности (IRR)', value: (read(props.outputState.output.projectEfficiency, 'irr') * 100), suffix: '%'},
    ]
}

// function data2(state) {
//     return [
//         {name: 'Снижение цены реализации за порцию до', value: 202, suffix: ' руб.'},
//         {name: 'Снижение объема продаж в месяц до', value: 2430, suffix: ' порций'},
//         {name: 'Рост издержек (за исключением амортизации) в месяц до', value: 410000, suffix: ' руб.'},
//     ]
// }

function read(parent, field) {
    if (parent === undefined)
        return '';
    return parent[field];
}

class OutputWidgetMain extends React.Component {
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
                        title="Эффективность проекта"
                        // subheader="September 14, 2016"
                    />
                    {/*<CardHeader*/}
                        {/*avatar={*/}
                            {/*<Avatar aria-label="Recipe" className={classes.avatar}>*/}
                                {/*<ThumbUp/>*/}
                            {/*</Avatar>*/}
                        {/*}*/}
                        {/*action={*/}
                            {/*<IconButton>*/}
                                {/*<MoreVertIcon />*/}
                            {/*</IconButton>*/}
                        {/*}*/}
                        {/*title='Проект эффективен!'*/}
                        {/*titleTypographyProps='variant="headline" component="h2"'*/}
                        {/*subheader="September 14, 2016"*/}
                    {/*/>*/}
                    {/*<CardMedia*/}
                        {/*className={classes.media}*/}
                        {/*image="/static/images/cards/paella.jpg"*/}
                        {/*title="Contemplative Reptile"*/}
                    {/*/>*/}
                    <CardContent>
                        <div className='row'>
                            <div className='col-auto'>
                                <Avatar aria-label="efficient" className={classes.avatar}>
                                    <ThumbUp/>
                                </Avatar>
                            </div>
                            <div className='col'>
                                <Typography variant='headline' component='h1' color='primary'>
                                    Проект эффективен!
                                </Typography>
                            </div>
                        </div>
                        {/*<Typography component="p">*/}
                            {/*This impressive paella is a perfect party dish and a fun meal to cook together with*/}
                            {/*your guests. Add 1 cup of frozen peas along with the mussels, if you like.*/}
                        {/*</Typography>*/}
                    </CardContent>
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
                            {/*<Divider/>*/}
                            {/*<div className={classes.panel + ' container'}>*/}
                            <Typography variant='caption'>
                                Справочно (сред.мес)
                            </Typography>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col'>
                                        <Typography variant='caption'>
                                            Выручка: {number(760417, ' руб.')}
                                        </Typography>
                                    </div>
                                    <div className='col'>
                                        <Typography variant='caption'>
                                            Прибыль: {number(218020, ' руб.')}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            {/*<div className='container'>*/}
                                {/*<div className='row'>*/}
                                    {/*<div className='col-2'>*/}
                                        {/*<Typography variant='subheading'>*/}
                                            {/*Справочно*/}
                                        {/*</Typography>*/}
                                        {/*<Typography variant='caption'>*/}
                                            {/*сред.мес.*/}
                                        {/*</Typography>*/}
                                    {/*</div>*/}
                                    {/*<div className='col offset-1'>*/}
                                        {/*<Table>*/}
                                            {/*<TableBody>*/}
                                                {/*<TableRow className={classes.spravRow}>*/}
                                                    {/*<TableCell component='th' scope='row' className={classes.spravCellFirst}>Выручка</TableCell>*/}
                                                    {/*<TableCell className={classes.spravCell}>{number(760417, ' руб.')}</TableCell>*/}
                                                {/*</TableRow>*/}
                                                {/*<TableRow className={classes.spravRow}>*/}
                                                    {/*<TableCell component='th' scope='row' className={classes.spravCellFirst}>Прибыль</TableCell>*/}
                                                    {/*<TableCell className={classes.spravCell}>{number(218020, ' руб.')}</TableCell>*/}
                                                {/*</TableRow>*/}
                                            {/*</TableBody>*/}
                                        {/*</Table>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            <br/>
                            <Divider/>
                            {/*<div className={classes.panel}>*/}
                            <div>
                                <Table>
                                    <TableBody>
                                        {data(this.props).map(n => {
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
                            </div>
                            <br/>
                            {/*<Typography variant='caption'>*/}
                                {/*Проект становится неэффективным при любом из нижеперечисленных условий*/}
                                {/*(NPV отрицателен на горизонте 60 месяцев)*/}
                            {/*</Typography>*/}
                            {/*<Divider/>*/}
                            {/*<Table>*/}
                                {/*<TableBody>*/}
                                    {/*{data2(null).map(n => {*/}
                                        {/*return (*/}
                                            {/*<TableRow className={classes.tableRow}>*/}
                                                {/*<TableCell component='th' scope='row' className={classes.tableCellFirst}>*/}
                                                    {/*{n.name}*/}
                                                {/*</TableCell>*/}
                                                {/*<TableCell className={classes.tableCell}>*/}
                                                    {/*{number(n.value, n.suffix)}*/}
                                                {/*</TableCell>*/}
                                            {/*</TableRow>*/}
                                        {/*);*/}
                                    {/*})}*/}
                                {/*</TableBody>*/}
                            {/*</Table>*/}
                            {/*<Typography variant='caption'>*/}
                                {/**NPV отрицателен на горизонте 60 месяцев.*/}
                            {/*</Typography>*/}
                            {/*<Typography paragraph variant="body2">*/}
                                {/*Method:*/}
                            {/*</Typography>*/}
                            {/*<Typography paragraph>*/}
                                {/*Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10*/}
                                {/*minutes.*/}
                            {/*</Typography>*/}
                            {/*<Typography paragraph>*/}
                                {/*Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high*/}
                                {/*heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly*/}
                                {/*browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving*/}
                                {/*chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,*/}
                                {/*salt and pepper, and cook, stirring often until thickened and fragrant, about 10*/}
                                {/*minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.*/}
                            {/*</Typography>*/}
                            {/*<Typography paragraph>*/}
                                {/*Add rice and stir very gently to distribute. Top with artichokes and peppers, and*/}
                                {/*cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.*/}
                                {/*Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into*/}
                                {/*the rice, and cook again without stirring, until mussels have opened and rice is*/}
                                {/*just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)*/}
                            {/*</Typography>*/}
                            {/*<Typography>*/}
                                {/*Set aside off of the heat to let rest for 10 minutes, and then serve.*/}
                            {/*</Typography>*/}
                        </CardContent>
                    </Collapse>
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

OutputWidgetMain.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(OutputWidgetMain);
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(OutputWidgetMain));
