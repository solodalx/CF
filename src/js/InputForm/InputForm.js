import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Cancel from '@material-ui/icons/Cancel';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';

import InputAppBar from './InputAppBar'
import InputFieldAmount from './InputFieldAmount.js'
import InputFieldNumber from './InputFieldNumber.js'
import InputFieldDate from './InputFieldDate.js'
import InputFieldRegion from './InputFieldRegion.js'
import InputFieldArea from './InputFieldArea.js'
import InputFieldTax from './InputFieldTax.js'
import InputFieldRegionEnv from './InputFieldRegionEnv.js'
import InputFieldStride from './InputFieldStride.js'
import InputFieldsManualExpenses from './InputFieldsManualExpenses.js'

import HorizontalNonLinearAlternativeLabelStepper from './TestStepper.js'
// import SimpleTabs from '../Others/TabsExample.js'
// import VerticalLinearStepper from '../Others/StepperExample'
import IntegrationReactSelect from './InputFieldRegionAutocomplete.js'
//import IntegrationDownshift from './AutocompleteExample0.js'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
    palette: {
        // primary: {main: green[400]}, // Purple and green play nicely together.
        primary: {main: '#558B2F'}, // Purple and green play nicely together.
        //primary: { main: purple[500] }, // Purple and green play nicely together.
        //secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
        // background: {
        //     default: '#FFC107',
        //     paper: '#FAFAFA',
        // },
    },
});

const styles = theme => ({
    // container: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     // flexGrow: 1,
    //     // width: '100%',
    //     backgroundColor: theme.palette.background.paper,
    // },
    // menuButton: {
    //     marginLeft: -12,
    //     marginRight: 20,
    // },
    // flex: {
    //     // flex: 1,
    // },
    // stepHeading: {
    //     fontSize: theme.typography.pxToRem(32),
    //     fontWeight: theme.typography.fontWeightRegular,
    // },
    heading: {
        fontSize: theme.typography.pxToRem(24),
        fontWeight: theme.typography.fontWeightRegular,
        // [theme.breakpoints.down('xs')]: {
        //     // fontSize: theme.typography.pxToRem(24),
        //     fontWeight: 'bold',
        // },
        // [theme.breakpoints.up('sm')]: {
        //     fontSize: theme.typography.pxToRem(24),
        //     fontWeight: theme.typography.fontWeightRegular,
        // },
        // color: "",
    },
    overflowHidden: {
        overflow: 'hidden !important',
        // overflow: 'hidden',
        width: '95%',
    },
    fullWidth: {
        width: '100%',
        // width: '95%',
    },
    fixedWidth: {
        minWidth: 100,
        maxWidth: 200,
        width: 200,
    },
    clientWidth: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '75%',
        },
    },
    compWidth: {
        // width: 200,
        [theme.breakpoints.down('xs')]: {
            // minWidth: '100%',
            minWidth: 50,
            maxWidth: 350,
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            width: 350,
        },
    },
    alignLeft: {
        textAlign: 'left',
    },
    alignRight: {
        textAlign: 'right',
    },
    justifyStart: {
        justifyContent: 'start',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        borderRadius: '25px',
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
    marginMinus15: {
        marginLeft: -15,
    },
    marginMinus10: {
        marginLeft: -10,
    },
    marginZero: {
        marginLeft: 0,
    },
    marginBottomZero: {
        marginBottom: 0,
    },
    paddingMinus15: {
        paddingLeft: -15,
    },
    paddingMinus10: {
        paddingLeft: -10,
    },
    paddingZero: {
        paddingLeft: 0,
    },
    paddingBottomZero: {
        paddingBottom: 0,
    },
    paddingPlus15: {
        paddingLeft: 15,
    },
    noShadow: {
        boxShadow: 'none',
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
    noBorder: {
        // outline: 'none !important',
        '&:focus': {
            outline: 'none',
        },
        // '&:focus, &$focusVisible': {
        // '&:focus': {
        //     zIndex: 1,
        //     '& $imageBackdrop': {
        //         opacity: 0.15,
        //     },
        //     '& $imageMarked': {
        //         opacity: 0,
        //     },
        //     '& $imageTitle': {
        //         border: '4px solid currentColor',
        //     },
        //     outline: 'none',
        // },
    },
    dotted: {
        borderBottom: '1px dotted',
    },

});

function tabContainer(props) {
    return (
        //<Typography component="div" style={{ padding: 8 * 3 }}>
        <Typography component="div" style={{display: 'flex', flexWrap: 'wrap'}}>
        {/*<Typography component="div" className={props.container}>*/}
            {props.children}
        </Typography>
    );
}

tabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


function getSteps() {
    return ['Входные параметры', 'Объемы инвестиций', 'Финансовые параметры'];
}

class InputForm extends React.Component {
    state = {
        activeStep: 0,
        assetsLand: '',
        assetsBuildings: '',
        value: 0,
    };

    handleStep = step => () => {
        this.setState({
            activeStep: step
        });
    };

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    handleChange2 = (event, value) => {
        this.setState({ value });
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        const { value } = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                {/*<div className={classes.fullWidth}>*/}
                {/*<div className={classes.overflowHidden}>*/}
                <div>
                    <InputAppBar/>
                    {/*<HorizontalNonLinearAlternativeLabelStepper/>*/}
                    {/*<AppBar position="static" color="primary">*/}
                        {/*<Toolbar>*/}
                            {/*<div class="contaner w-100">*/}
                                {/*<div class="row align-items-center justify-content-between">*/}
                                    {/*/!*<div class="col-1 no-gutters">*!/*/}
                                    {/*<div class="col-1">*/}
                                        {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">*/}
                                            {/*<Cancel />*/}
                                        {/*</IconButton>*/}
                                    {/*</div>*/}
                                    {/*/!*<div className="col-10 justify-content-start no-gutters">*!/*/}
                                    {/*<div className="col-10 text-left">*/}
                                        {/*/!*<Typography variant="title" color="inherit" className={classes.flex}>*!/*/}
                                        {/*<Typography variant="title" color="inherit" className={classes.flex}>*/}
                                            {/*/!*Ввод данных для расчета модели*!/*/}
                                            {/*Независимая экспертиза проектов*/}
                                            {/*/!*НЭП*!/*/}
                                        {/*</Typography>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-1">*/}
                                        {/*<Button color="inherit">Login</Button>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</Toolbar>*/}
                    {/*</AppBar>*/}

                    <Stepper
                        className={[classes.clientWidth, classes.inputBackground].join(' ')}
                        // className={classes.clientWidth}
                        activeStep={activeStep}
                        orientation="vertical" nonLinear
                    >
                        {steps.map((label, index) => {
                            return (
                                //<Step key={label} className={[classes.alignLeft, classes.noBorder].join(' ')}>
                                <Step key={label} className={classes.alignLeft}>
                                {/*<Step key={label}>*/}
                                    {/*<StepLabel className={classes.stepHeading}>{label}</StepLabel>*/}
                                    {/*<StepLabel>{label}</StepLabel>*/}
                                    <StepButton
                                        className={classes.noBorder}
                                        onClick={this.handleStep(index)}
                                    >
                                        <div className={classes.dotted}>
                                            {label}
                                        </div>
                                    </StepButton>
                                    <StepContent className={classes.paddingZero}>
                                    {/*<StepContent>*/}
                                        {/*<div class="container">*/}
                                            {/*<div class="row">*/}
                                                {/*<div class="col">*/}
                                                    <Typography>{getStepContent(index, this.props)}</Typography>
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        <div className={classes.actionsContainer}>
                                            <div>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={this.handleBack}
                                                    className={classes.button}
                                                >
                                                    Назад
                                                </Button>
                                                <Button
                                                    variant="raised"
                                                    color="primary"
                                                    onClick={this.handleNext}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Рассчитать модель' : 'Далее'}
                                                </Button>
                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            {/*<Typography>All steps completed - you&quot;re finished</Typography>*/}
                            <Button onClick={this.handleReset} className={classes.button}>
                                Заново
                            </Button>
                        </Paper>
                    )}

                </div>
            </MuiThemeProvider>
        );
    }
}

InputForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputForm);

function getStepContent(step, props, state) {
    const { classes } = props;

    switch (step) {
        case 0:
            return (
                <div class={classes.panel + " container no-gutters"}>
                    <div class="row justify-content-start">
                        <div class="col">
                            <InputFieldDate id="field-input-general-datestart" label="Дата" tip="Дата начала проекта" defaultValue=""/>
                        </div>
                        {/*<div class="col">*/}
                            {/*<InputFieldNumber id="field-input-general-term" label="Срок" tip="Срок проекта" defaultValue="60" adornment="мес." disabled/>*/}
                        {/*</div>*/}
                    </div>
                    <div class="row">
                        <div class="col">
                            {/*<IntegrationReactSelect/>*/}
                            <InputFieldRegion/>
                        </div>
                        <div className="col">
                            <InputFieldRegionEnv/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <InputFieldArea/>
                        </div>
                        <div className="col">
                            <InputFieldTax/>
                        </div>
                        {/*<div>*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                    {/*</div>*/}
                    </div>
                </div>
            )
        case 1:
            return (
                <div>
                    {/*<ExpansionPanel className={classes.fullWidth}>*/}
                    {/*<ExpansionPanel className={[classes.fullWidth, classes.noShadow].join(' ')}>*/}
                    {/*<ExpansionPanel className={[classes.panel, classes.fullWidth].join(' ')}>*/}
                    <ExpansionPanel className={classes.panel}>
                        {/*<ExpansionPanel className={[classes.fullWidth, classes.paddingZero].join(' ')}>*/}
                        {/*<ExpansionPanelSummary className={classes.paddingZero} expandIcon={<ExpandMoreIcon/>}>*/}
                        <ExpansionPanelSummary
                            classes={{
                                root: [classes.paddingZero, classes.justifyStart].join(' '),
                                firstChild: classes.compWidth,
                            }}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <div class="container no-gutters">
                                <div class="row justify-content-sm-between">
                                    <div class="col-sm-auto col-12">
                                        <Typography className={classes.heading}>Имеющиеся активы</Typography>
                                    </div>
                                    <div className="w-100 d-sm-none"/>
                                    {/*<div className="col text-nowrap text-right">*/}
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-assets-total" label="Всего" tip="Всего собственных средств" disabled/>
                                    </div>
                                </div>
                            </div>
                            {/*<InputFieldAmount className={classes.alignRight} id="field-input-assets-total" label="" tip="" />*/}
                        </ExpansionPanelSummary>
                        {/*<ExpansionPanelDetails className={classes.container}>*/}
                        <ExpansionPanelDetails className={classes.paddingZero}>
                            <div class="container no-gutters">
                                <div class="row justify-content-start">
                                    {/*<div className={"col " + classes.fixedWidth}>*/}
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-assets-land" label="Земля" tip="Стоимость земли" />
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-assets-buildings" label="Здания" tip="Стоимость зданий" />
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-assets-equipment" label="Оборудование" tip="Стоимость оборудования" />
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-assets-transport" label="Транспорт" tip="Стоимость транспорта" />
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-assets-intangible" label="НМА" tip="Стоимость нематериальных активов" />
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-assets-others" label="Прочее" tip="Стоимость прочих активов" />
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-assets-additional" label="Ден. средства" tip="Денежные средства"/>
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    {/*<ExpansionPanel className={classes.fullWidth}>*/}
                    {/*<ExpansionPanel className={[classes.fullWidth, classes.noShadow].join(' ')}>*/}
                    <ExpansionPanel className={classes.panel}>
                        {/*<ExpansionPanelSummary className={classes.paddingZero} expandIcon={<ExpandMoreIcon />}>*/}
                        <ExpansionPanelSummary
                            classes={{
                                root: [classes.paddingZero, classes.justifyStart].join(' '),
                                content: classes.compWidth,
                            }}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <div className="container no-gutters">
                                <div className="row justify-content-sm-between">
                                    <div className="col-sm-auto col-12">
                                        <Typography className={classes.heading}>Планируемые инвестиции</Typography>
                                    </div>
                                    <div className="w-100 d-sm-none"/>
                                    {/*<div className="col text-nowrap text-right">*/}
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-inv-total" label="Всего" tip="Всего заемных средств" disabled/>
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelSummary>
                        {/*<ExpansionPanelDetails className={classes.container}>*/}
                        <ExpansionPanelDetails className={classes.paddingZero}>
                            <div className="container no-gutters">
                                <div className="row justify-content-start">
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-inv-land" label="Земля" tip="Инвестиции в землю"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-inv-buildings" label="Здания" tip="Инвестиции в здания"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-inv-equipment" label="Оборудование" tip="Инвестиции в оборудование"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-inv-transport" label="Транспорт" tip="Инвестиции в транспорт"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-inv-intangible" label="НМА" tip="Инвестиции в нематериальные активы"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-inv-others" label="Прочее" tip="Инвестиции в прочие активы"/>
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    {/*<div>*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                    {/*</div>*/}
                    {/*<div className={classes.container}>*/}
                    <div className={classes.panel}>
                        <div class="container no-gutters">
                            <div class="row">
                                <div className="col-sm-auto col-12">
                                    <InputFieldAmount id="field-input-inv-total" label="Инвестиции" tip="Всего инвестиций" disabled/>
                                </div>
                                <div className="col-sm-auto col-12">
                                    <InputFieldAmount id="field-input-inv-total" label="в т.ч. уже вложено" tip="в т.ч. уже вложено" disabled/>
                                </div>
                                {/*<div class="col">*/}
                                    {/*<InputFieldAmount id="field-input-inv-own" label="Собственные средства" tip="" />*/}
                                {/*</div>*/}
                                {/*<div class="col">*/}
                                    {/*<InputFieldAmount id="field-input-inv-borrowed" label="Заемные средства" tip="" />*/}
                                {/*</div>*/}
                                <div className="col-sm-auto col-12">
                                    <InputFieldNumber id="field-calc-inv-ratio" label="Собст./Заем." tip="Соотношение собственных и заемных средств" disabled/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <br/>
                        <br/>
                    </div>
                </div>
            );
        case 2:
            return (
                <div>
                    {/*<ExpansionPanel className={classes.fullWidth}>*/}
                    {/*<ExpansionPanel className={[classes.fullWidth, classes.noShadow].join(' ')}>*/}
                    <ExpansionPanel className={classes.panel}>
                        <ExpansionPanelSummary
                            classes={{
                                root: [classes.paddingPlus15, classes.justifyStart].join(' '),
                                content: classes.compWidth,
                            }}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            {/*<div className="container no-gutters">*/}
                            <div className={classes.fullWidth}>
                                <div className="row justify-content-sm-between">
                                    <div className="col-sm-auto col-12">
                                        <Typography className={classes.heading}>
                                            Доходная часть
                                        </Typography>
                                    </div>
                                    <div className="w-100 d-sm-none"/>
                                    {/*<div className="col-sm-auto col-12 text-nowrap text-right">*/}
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-income-total" label="Всего" tip="Всего доходов" disabled/>
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.paddingZero}>
                            <div className="container no-gutters">
                                <div className="row justify-content-start">
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-income-price" label="Цена" tip="Средняя цена реализации" />
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldNumber id="field-input-income-amount" label="Продажи" tip="Среднее количество продаж в день" />
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-income-earning" label="Выручка" tip="Среднемесячная выручка" />
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    {/*<ExpansionPanel className={classes.fullWidth}>*/}
                    {/*<ExpansionPanel className={[classes.fullWidth, classes.noShadow].join(' ')}>*/}
                    <ExpansionPanel className={classes.panel}>
                        {/*<ExpansionPanelSummary className={classes.paddingPlus15} expandIcon={<ExpandMoreIcon />}>*/}
                        <ExpansionPanelSummary
                            classes={{
                                root: [classes.paddingPlus15, classes.justifyStart].join(' '),
                                content: classes.compWidth,
                            }}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            {/*<div className="container no-gutters">*/}
                            <div className={classes.fullWidth}>
                                <div className="row justify-content-sm-between">
                                    <div className="col-sm-auto col-12">
                                        <Typography className={classes.heading}>Расходная часть</Typography>
                                    </div>
                                    <div className="w-100 d-sm-none"/>
                                    {/*<div className="col text-nowrap text-right">*/}
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-expenses-total" label="Всего" tip="Всего расходов" disabled/>
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={[classes.paddingPlus15, classes.paddingBottomZero].join(' ')}>
                            {/*<div className="container no-gutters">*/}
                            <div className={classes.fullWidth}>
                                <div className="row justify-content-start">
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-expenses-taxes" label="Налоги" tip="Средняя сумма налогов и сборов в месяц" />
                                    </div>
                                    {/*<div class="col">*/}
                                        {/*<InputFieldAmount id="field-input-expenses-salary" label="З/П" tip="Средняя заработная плата в месяц" />*/}
                                    {/*</div>*/}
                                    {/*<div class="col">*/}
                                        {/*<InputFieldAmount id="field-input-expenses-rent" label="Аренда" tip="Средняя аредна в месяц" />*/}
                                    {/*</div>*/}
                                    {/*<div class="col">*/}
                                        {/*<InputFieldAmount id="field-input-expenses-transport" label="Транспорт" tip="Транспортные расходы в месяц" />*/}
                                    {/*</div>*/}
                                    {/*<div class="col">*/}
                                        {/*<InputFieldAmount id="field-input-expenses-others" label="Прочее" tip="Прочие расходы" />*/}
                                    {/*</div>*/}
                                    <div className="col-sm-auto col-12">
                                        <InputFieldNumber id="field-input-expenses-grossmargin" label="Валовая рентабельность" tip="Валовая рентабельность" adornment="%" disabled/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldNumber id="field-input-expenses-netmargin" label="Чистая рентабельность" tip="Чистая рентабельность" adornment="%" disabled/>
                                    </div>
                                </div>
                                {/*<br/>*/}
                                <div className="row justify-content-start">
                                    <div className="col">
                                        <InputFieldsManualExpenses/>
                                    </div>
                                </div>
                           </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    {/*<ExpansionPanel className={classes.fullWidth}>*/}
                        {/*<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>*/}
                            {/*<div className="container no-gutters">*/}
                                {/*<div className="row justify-content-between">*/}
                                    {/*<div className="col">*/}
                                        {/*<Typography className={classes.heading}>Прочее</Typography>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</ExpansionPanelSummary>*/}
                        {/*<ExpansionPanelDetails className={classes.container}>*/}
                     <div className={classes.panel}>
                            <div className="container no-gutters">
                                <div className="row justify-content-start align-items-center">
                                    <div className="col-sm-auto col-12">
                                        <InputFieldNumber id="field-input-params-loanrate" label="% ставка" tip="Ставка привлечения заемных средств" adornment="%"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount id="field-input-params-dividends" label="Дивиденды" tip="Выплата дивидендов в месяц"/>
                                    </div>
                                    <div class="col">
                                        <InputFieldStride/>
                                    </div>
                                </div>
                            </div>
                     </div>
                        {/*</ExpansionPanelDetails>*/}
                    {/*</ExpansionPanel>*/}
                    <div>
                        <br/>
                        <br/>
                    </div>
                </div>
            );
        default:
            return 'Unknown step';
    }
}

