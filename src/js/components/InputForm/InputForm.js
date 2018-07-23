import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modelAction from '../../common/actions/modelAction';
import * as model from "../../common/model";

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
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import * as fields from '../../common/constants/fieldConstants'
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
import InputFieldCalculator from './InputFieldCalculator'

import {IS_DEBUG} from '../../common/properties';

// import HorizontalNonLinearAlternativeLabelStepper from './TestStepper.js'
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
    invisible: {
        // display: 'none !important',
        display: 'none',
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
    return ['Входные параметры', 'Объемы инвестиций в проект', 'Финансовые параметры'];
}

class InputForm extends React.Component {
    state = {
        activeStep: 0,
        // assetsLand: '',
        // assetsBuildings: '',
        // value: 0,
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

    constructor(props) {
        super(props);
        // props.modelAction.setInitialState();
        if (IS_DEBUG) {
            console.log('NEPLOG: InputForm: constructor: modelState = ' + props.modelState);
            console.log(props.modelState);
        }
    }

    componentDidMount = (event) => {
        // this.props.modelAction.setInitialState();
        if (IS_DEBUG) {
            console.log('NEPLOG: InputForm: componentDidMount: modelState = ' + this.props.modelState);
            console.log(this.props.modelState);
        }
    };

    // updateState(blockName, fieldName) = (value) => {
    //     Object.assign({}, this.props.model, {[blockName]: Object.assign({}, this.props.model[blockName], {[fieldName]: value})})
    // }

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        const { value } = this.state;
        if (IS_DEBUG) {
            console.log('NEPLOG: InputForm: render: modelState = ' + this.props.modelState);
            console.log(this.props.modelState);
        }

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
                                                    // className={classes.button}
                                                    className={[classes.button, classes.noBorder].join(' ')}
                                                >
                                                    Назад
                                                </Button>
                                                <Button
                                                    variant="raised"
                                                    color="primary"
                                                    onClick={this.handleNext}
                                                    // className={classes.button}
                                                    className={[classes.button, classes.noBorder].join(' ')}
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

function mapStateToProps(store) {
    return {
        modelState: store.modelState,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        modelAction: bindActionCreators(modelAction, dispatch),
    }
}

InputForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(InputForm);
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(InputForm));


// var updateState(blockName, fieldName) = (value) => {
//     Object.assign({}, this.props.model, {[blockName]: Object.assign({}, this.props.model[blockName], {[fieldName]: value})})
// }

function getStepContent(step, props, state) {
    const { classes } = props;

    switch (step) {
        case 0:
            return (
                <div class={classes.panel + " container no-gutters"}>
                    <div class="row justify-content-start">
                        <div class="col">
                            <InputFieldDate id="field-input-general-datestart" label="Дата начала проекта" tip="Когда планируете осуществлять первые инвестиции в проект" defaultValue=""/>
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
                                        {/*<InputFieldAmount id={fields.FL_ASSETS_TOTAL} label="Всего" tip="Всего собственных средств" defaultValue={0} disabled/>*/}
                                        {/*<InputFieldAmount value={model.getStep2TotalExistingAssets(props.modelState)} label="Всего" tip="Всего собственных средств" disabled/>*/}
                                        <InputFieldAmount value={model.getTotal(props.modelState.existingAssets)} label="Всего" tip="Всего собственных средств" disabled/>
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
                                        <InputFieldAmount field='existingAssets:land' value={props.modelState.existingAssets.land} label="Земля" tip="Стоимость земли"/>
                                        {/*<InputFieldAmount id={fields.FL_ASSETS_LAND} label="Земля" tip="Стоимость земли"/>*/}
                                        {/*<InputFieldAmount value={this.props.model.step2.existedAssets.land} label="Земля" tip="Стоимость земли"/>*/}
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_ASSETS_BUILDINGS} label="Здания" tip="Стоимость зданий"/>*/}
                                        <InputFieldAmount field='existingAssets:buildings' value={props.modelState.existingAssets.buildings} label="Здания" tip="Стоимость зданий"/>
                                        {/*<InputFieldAmount  parentBlockName='step2' blockName='existedAssets' fieldName='buildings' field='step2:existedAssets:buildings' label="Здания" tip="Стоимость зданий"/>*/}
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_ASSETS_EQUIPMENT} label="Оборудование" tip="Стоимость оборудования"/>*/}
                                        <InputFieldAmount field='existingAssets:equipment' value={props.modelState.existingAssets.equipment} label="Оборудование" tip="Стоимость оборудования"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_ASSETS_TRANSPORT} label="Транспорт" tip="Стоимость транспорта"/>*/}
                                        <InputFieldAmount field='existingAssets:transport' value={props.modelState.existingAssets.transport} label="Транспорт" tip="Стоимость транспорта"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_ASSETS_INTANGIBLE} label="Нематериальные активы" tip="Стоимость нематериальных активов"/>*/}
                                        <InputFieldAmount field='existingAssets:intangible' value={props.modelState.existingAssets.intangible} label="Нематериальные активы" tip="Стоимость нематериальных активов"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_ASSETS_OTHERS} label="Прочее" tip="Стоимость прочих активов"/>*/}
                                        <InputFieldAmount field='existingAssets:others' value={props.modelState.existingAssets.others} label="Прочее" tip="Стоимость прочих активов"/>
                                    </div>
                                    {/*<div className="col-sm-auto col-12">*/}
                                        {/*<InputFieldAmount id={fields.FL_ASSETS_CASH} label="Ден. средства" tip="Денежные средства"/>*/}
                                    {/*</div>*/}
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
                                        <Typography className={classes.heading}>Планируемые к покупке активы</Typography>
                                    </div>
                                    <div className="w-100 d-sm-none"/>
                                    {/*<div className="col text-nowrap text-right">*/}
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_INVEST_TOTAL} label="Всего" tip="Всего заемных средств" defaultValue={0} disabled/>*/}
                                        {/*<InputFieldAmount value={model.getStep2TotalPlannedAssets(props.modelState)} label="Всего" tip="Всего заемных средств" defaultValue={0} disabled/>*/}
                                        <InputFieldAmount value={model.getTotal(props.modelState.plannedAssets)} label="Всего" tip="Всего заемных средств" defaultValue={0} disabled/>
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelSummary>
                        {/*<ExpansionPanelDetails className={classes.container}>*/}
                        <ExpansionPanelDetails className={classes.paddingZero}>
                            <div className="container no-gutters">
                                <div className="row justify-content-start">
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_INVEST_LAND} label="Земля" tip="Инвестиции в землю"/>*/}
                                        <InputFieldAmount field='plannedAssets:land' value={props.modelState.plannedAssets.land} label="Земля" tip="Инвестиции в землю"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_INVEST_BUILDINGS} label="Здания" tip="Инвестиции в здания"/>*/}
                                        <InputFieldAmount field='plannedAssets:buildings' value={props.modelState.plannedAssets.buildings} label="Здания" tip="Инвестиции в здания"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_INVEST_EQUIPMENT} label="Оборудование" tip="Инвестиции в оборудование"/>*/}
                                        <InputFieldAmount field='plannedAssets:equipment' value={props.modelState.plannedAssets.equipment} label="Оборудование" tip="Инвестиции в оборудование"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_INVEST_TRANSPORT} label="Транспорт" tip="Инвестиции в транспорт"/>*/}
                                        <InputFieldAmount field='plannedAssets:transport' value={props.modelState.plannedAssets.transport} label="Транспорт" tip="Инвестиции в транспорт"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_INVEST_INTANGIBLE} label="Нематериальные активы" tip="Инвестиции в нематериальные активы"/>*/}
                                        <InputFieldAmount field='plannedAssets:intangible' value={props.modelState.plannedAssets.intangible} label="Нематериальные активы" tip="Инвестиции в нематериальные активы"/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_INVEST_OTHERS} label="Прочее" tip="Инвестиции в прочие активы"/>*/}
                                        <InputFieldAmount field='plannedAssets:others' value={props.modelState.plannedAssets.others} label="Прочее" tip="Инвестиции в прочие активы"/>
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
                                    {/*<InputFieldAmount id={fields.FL_INVESTMENTS_ALL} label="Инвестиции" tip="Всего инвестиций" disabled/>*/}
                                    <InputFieldAmount value={model.getStep2InvestmentsAll(props.modelState)} label="Инвестиции" tip="Всего инвестиций" disabled/>
                                </div>
                                <div className="col-sm-auto col-12">
                                    {/*<InputFieldAmount id={fields.FL_INVESTMENTS_ALREADY_INVESTED} label="в т.ч. уже вложено" tip="в т.ч. уже вложено" disabled/>*/}
                                    <InputFieldAmount value={model.getStep2AlreadyInvested(props.modelState)} label="в т.ч. уже вложено" tip="в т.ч. уже вложено" disabled/>
                                </div>
                                {/*<div class="col">*/}
                                    {/*<InputFieldAmount id="field-input-inv-own" label="Собственные средства" tip="" />*/}
                                {/*</div>*/}
                                {/*<div class="col">*/}
                                    {/*<InputFieldAmount id="field-input-inv-borrowed" label="Заемные средства" tip="" />*/}
                                {/*</div>*/}
                                <div className="col-sm-auto col-12">
                                    {/*<InputFieldAmount id={fields.FL_INVESTMENTS_OWN_CASH} label="Денежные средства" tip="Собственные денежные средства к вложению в проект"/>*/}
                                    <InputFieldAmount field='invest:ownCash' value={props.modelState.invest.ownCash} label="Денежные средства" tip="Собственные денежные средства к вложению в проект"/>
                                </div>
                                <div className="col-sm-auto col-12">
                                    {/*<InputFieldNumber id={fields.FL_INVESTMENTS_RATIO} fltype={fields.FLTYPE_STRING} label="Собст./Заем." tip="Соотношение собственных и заемных средств" disabled/>*/}
                                    <InputFieldAmount
                                        // id={fields.FL_INVESTMENTS_RATIO}
                                        value={model.getStep2Ratio(props.modelState)}
                                        label="Собст./Заем."
                                        // tip="Соотношение собственных и заемных средств"
                                        tip={
                                            'Собственные средства = ' +
                                            // ((props.modelState.flInvestmentsOwnAll == '') ? '0' : props.modelState.flInvestmentsOwnAll) +
                                            model.getStep2OwnAll(props.modelState) +
                                            'р. / Заемные средства = ' +
                                            // ((props.modelState.flInvestmentsToBorrow == '') ? '0' : props.modelState.flInvestmentsToBorrow) +
                                            model.getStep2ToBorrow(props.modelState) +
                                            'р.'
                                        }
                                        flType={fields.FLTYPE_STRING}
                                        disabled
                                    />
                                </div>
                                <div className="col-sm-auto col-12">
                                {/*<div className={(props.model.flInvestmentsToBorrow == '') ? 'invisible col-sm-auto col-12' :  'col-sm-auto col-12'}>*/}
                                    {/*<InputFieldAmount id={fields.FL_INVESTMENTS_LOAN_RATE} label="% ставка" tip="Ставка привлечения заемных средств" flType={fields.FLTYPE_NUMBER} adornment="%" disabled={(props.modelState.flInvestmentsToBorrow == '')} />*/}
                                    <InputFieldAmount field='invest:loanRate' value={props.modelState.invest.loanRate} label="% ставка" tip="Ставка привлечения заемных средств" flType={fields.FLTYPE_NUMBER} adornment="%" disabled={(model.getStep2ToBorrow(props.modelState) == 0)} />
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
                                        {/*<InputFieldAmount id={fields.FL_INCOME_TOTAL} label="Всего" tip="Всего доходов" disabled/>*/}
                                        <InputFieldAmount value={model.getStep3IncomeTotal(props.modelState, 0)} label="Всего" tip="Всего доходов" disabled/>
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.paddingZero}>
                            <div className="container no-gutters">
                                <div className="row justify-content-start">
                                    <InputFieldCalculator/>
                                </div>
                                <div className="row justify-content-start">
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_INCOME_AVERAGE_PRICE} label="Цена" tip="Средняя цена реализации" />*/}
                                        <InputFieldAmount value={model.getStep3AveragePrice(props.modelState, 0)} label="Цена" tip="Средняя цена реализации" />
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldNumber id="field-input-income-amount" label="Продажи" tip="Среднее количество продаж в день" />*/}
                                        {/*<InputFieldAmount id={fields.FL_INCOME_AVERAGE_SALES_PER_DAY} label="Продажи" tip="Среднее количество продаж в день" flType={fields.FLTYPE_NUMBER} adornment="ед."/>*/}
                                        <InputFieldAmount value={model.getStep3AverageSalesPerDay(props.modelState, 0)} label="Продажи" tip="Среднее количество продаж в день" flType={fields.FLTYPE_NUMBER} adornment="ед."/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_INCOME_PER_MONTH} label="Выручка" tip="Среднемесячная выручка" />*/}
                                        <InputFieldAmount value={model.getStep3IncomePerMonth(props.modelState, 0)} label="Выручка" tip="Среднемесячная выручка" />
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    {/*<ExpansionPanel className={classes.fullWidth}>*/}
                    {/*<ExpansionPanel className={[classes.fullWidth, classes.noShadow].join(' ')}>*/}
                    <ExpansionPanel
                        className={classes.panel}
                        expanded={props.modelState.expenses.isManual}
                    >
                        {/*<ExpansionPanelSummary className={classes.paddingPlus15} expandIcon={<ExpandMoreIcon />}>*/}
                        <ExpansionPanelSummary
                            classes={{
                                root: [classes.paddingPlus15, classes.justifyStart].join(' '),
                                content: classes.compWidth,
                            }}
                            // expandIcon={<ExpandMoreIcon />}
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
                                        <InputFieldsManualExpenses/>
                                        {/*<InputFieldAmount id={fields.FL_EXPENSES_TOTAL} label="Всего" tip="Всего расходов" disabled/>*/}
                                        <div className={(props.modelState.expenses.isManual) ?
                                            "row justify-content-end" :
                                            classes.invisible + " row justify-content-end"}>
                                            <InputFieldAmount value={model.getStep3ExpensesTotal(props.modelState)} label="Всего" tip="Всего расходов" disabled/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={[classes.paddingPlus15, classes.paddingBottomZero].join(' ')}>
                            <div className="container no-gutters">
                                <div className="row justify-content-start">
                                    <div className="col">
                                        <div className="container no-gutters">
                                            <div className="row justify-content-start">
                                                Управленческий персонал
                                            </div>
                                            <div className="row justify-content-start">
                                                <div className="col-sm-auto col-12">
                                                    {/*<InputFieldSwitchable id={fields.FL_EXPENSES_MANUAL.FL_MANAGEMENT_COUNT} label="Численность" tip="Количество сотрудников" flType={fields.FLTYPE_NUMBER}/>*/}
                                                    <InputFieldAmount field='expenses:managementCount' value={props.modelState.expenses.managementCount} label="Численность" tip="Количество сотрудников" flType={fields.FLTYPE_NUMBER}/>
                                                </div>
                                                <div className="col-sm-auto col-12">
                                                    <InputFieldAmount field='expenses:managementSalary' value={props.modelState.expenses.managementSalary} label="Средняя зарплата" tip="Средняя зарплата 1 чел. в месяц"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="container no-gutters">
                                            <div className="row justify-content-start">
                                                Производственный персонал
                                            </div>
                                            <div className="row justify-content-start">
                                                <div className="col-sm-auto col-12">
                                                    <InputFieldAmount  field='expenses:employeeCount' value={props.modelState.expenses.employeeCount} label="Численность" tip="Количество сотрудников" flType={fields.FLTYPE_NUMBER}/>
                                                </div>
                                                <div className="col-sm-auto col-12">
                                                    <InputFieldAmount  field='expenses:employeeSalary' value={props.modelState.expenses.employeeSalary} label="Средняя зарплата" tip="Средняя зарплата 1 чел. в месяц"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*</div>*/}
                                    {/*<div className="row justify-content-start">*/}
                                    <div className="col">
                                        <div className="container no-gutters">
                                            <div className="row justify-content-start">
                                                Другие расходы
                                            </div>
                                            <div className="row justify-content-start">
                                                <div className="col-sm-auto col-12">
                                                    <InputFieldAmount field='expenses:rent' value={props.modelState.expenses.rent} label="Аренда" tip="Средняя аредна в месяц"/>
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col-sm-auto col-12">
                                                    <InputFieldAmount field='expenses:transport' value={props.modelState.expenses.transport} label="Транспорт" tip="Транспортные расходы в месяц" />
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col-sm-auto col-12">
                                                    <InputFieldAmount field='expenses:taxes' value={props.modelState.expenses.taxes} label="Налоги" tip="Средняя сумма налогов и сборов в месяц" />
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col-sm-auto col-12">
                                                    <InputFieldAmount field='expenses:others' value={props.modelState.expenses.others} label="Прочее" tip="Прочие расходы" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="container no-gutters">*/}
                            {/*<div className={classes.fullWidth}>*/}
                                {/*<div className="row justify-content-start">*/}
                                    {/*<div className="col-sm-auto col-12">*/}
                                        {/*<InputFieldAmount id={fields.FL_EXPENSES_TAXES} label="Налоги" tip="Средняя сумма налогов и сборов в месяц" />*/}
                                    {/*</div>*/}
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
                                    {/*<div className="col-sm-auto col-12">*/}
                                        {/*/!*<InputFieldNumber id="field-input-expenses-grossmargin" label="Валовая рентабельность" tip="Валовая рентабельность" adornment="%" disabled/>*!/*/}
                                        {/*<InputFieldAmount id={fields.FL_EXPENSES_GROSS_MARGIN} label="Валовая рентабельность" tip="Валовая рентабельность"  flType={fields.FLTYPE_NUMBER} adornment="%" disabled/>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-auto col-12">*/}
                                        {/*/!*<InputFieldNumber id="field-input-expenses-netmargin" label="Чистая рентабельность" tip="Чистая рентабельность" adornment="%" disabled/>*!/*/}
                                        {/*<InputFieldAmount id={fields.FL_EXPENSES_NET_MARGIN} label="Чистая рентабельность" tip="Чистая рентабельность" flType={fields.FLTYPE_NUMBER} adornment="%" disabled/>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<br/>*/}
                                {/*<div className="row justify-content-start">*/}
                                    {/*<div className="col">*/}
                                        {/*<InputFieldsManualExpenses/>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                           {/*</div>*/}
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
                                    {/*<div className={(props.model.flExpensesIsManual == 0) ? 'invisible col-sm-auto col-12' :  'col-sm-auto col-12'}>*/}
                                        <InputFieldAmount id={fields.FL_PARAMS_GROSS_MARGIN} label="Валовая рентабельность" tip="Валовая рентабельность" flType={fields.FLTYPE_NUMBER} adornment="%" disabled/>
                                    </div>
                                    < div className = "col-sm-auto col-12" >
                                    {/*<div className={(props.model.flExpensesIsManual == 0) ? 'invisible col-sm-auto col-12' :  'col-sm-auto col-12'}>*/}
                                        < InputFieldAmount id={fields.FL_PARAMS_NET_MARGIN} label="Чистая рентабельность" tip="Чистая рентабельность" flType={fields.FLTYPE_NUMBER} adornment="%" disabled/>
                                    </div>
                                    <div className="w-100"></div>
                                    {/*<div className="col-sm-auto col-12">*/}
                                        {/*/!*<InputFieldNumber id="field-input-params-loanrate" label="% ставка" tip="Ставка привлечения заемных средств" adornment="%"/>*!/*/}
                                        {/*<InputFieldAmount id={fields.FL_PARAMS_LOAN_RATE} label="% ставка" tip="Ставка привлечения заемных средств" flType={fields.FLTYPE_NUMBER} adornment="%"/>*/}
                                    {/*</div>*/}
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_PARAMS_DIVIDENTS} label="Дивиденды" tip="Выплата дивидендов в месяц. Сколько планируете изымать из бизнеса в месяц."/>*/}
                                        <InputFieldAmount field='finance:dividents' value={props.modelState.finance.dividents} label="Дивиденды" tip="Выплата дивидендов в месяц. Сколько планируете изымать из бизнеса в месяц."/>
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

