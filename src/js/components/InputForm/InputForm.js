import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom'

import * as regionsAction from '../../common/actions/regionsAction';
import * as townsAction from '../../common/actions/townsAction';
import * as businessAreaAction from '../../common/actions/businessAreaAction';
import * as environmentAction from '../../common/actions/environmentAction';
import * as bigdataAction from '../../common/actions/bigdataAction';
import * as modelAction from '../../common/actions/modelAction';
import * as model from "../../common/model";
import * as outputAction from '../../common/actions/outputAction';

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
import CmnAppBar from '../common/CmnAppBar'
import BigTip from '../common/BigTip'
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
import InputFieldAutocomplete from './InputFieldAutocomplete'
// import InputFieldRegionAutocomplete from './InputFieldRegionAutocomplete'
// import IntegrationReactSelect from './InputFieldRegionAutocomplete_example'
import InputFieldSwitchable from './InputFieldSwitchable'

import {IS_DEBUG} from '../../common/properties';

// import HorizontalNonLinearAlternativeLabelStepper from './TestStepper.js'
// import SimpleTabs from '../Others/TabsExample.js'
// import VerticalLinearStepper from '../Others/StepperExample'
// import IntegrationReactSelect from './InputFieldRegionAutocomplete.js'
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
    inputContainer: {
    },
    stepperContainer: {
        // display: 'flex',
        // justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
        },
        [theme.breakpoints.up('sm')]: {
            // display: 'flex',
            // justifyContent: 'center',
            paddingLeft: '15%',
            paddingRight: '15%',
        },
    },
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
        // [theme.breakpoints.down('xs')]: {
        //     width: '75%',
        // },
        // [theme.breakpoints.up('sm')]: {
        //     width: '80%',
        // },
        // [theme.breakpoints.up('lg')]: {
        //     width: '55%',
        // },
        // zIndex: -1,
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
    column: {
        paddingLeft: 0,
    },
    paddingBottomZero: {
        paddingBottom: 0,
    },
    paddingPlus15: {
        paddingLeft: 15,
    },
    paddingPlus45: {
        paddingLeft: 45,
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
    singleLink: {
        color: '#CCCCCC',
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

const outputLink = props => <Link to='/output' style={{color: '#FFFFFF'}} {...props} />


function getSteps() {
    return ['Входные параметры', 'Объемы инвестиций в проект', 'Финансовые параметры'];
}

function getRegionsSuggestions(regions) {
    return regions.map(region => ({
        value: region.id,
        label: region.name,
    }))
}

function getTownsSuggestions0(towns, regions) {
    return towns.map(town => ({
        value: town.id,
        label: town.name,
    }))
}

function getTownsSuggestions(towns, regions) {
    //, selectedRegions) {
    // if (selectedRegions == '') {
    if (IS_DEBUG) {
        console.log('NEPLOG: InputForm: getTownsSuggestions: towns = ' + towns + ' regions = ' + regions);
        console.log(towns);
        console.log(regions);
    }

    return towns.map(town => {
        let region = regions.find(r => r.id === town.regionId)
        return {
            value: town.id,
            label: (region.name == town.name) ? town.name : region.name + ', ' + town.name,
        }
    })

    // } else if (selectedRegions.length === 1) {
    //     let id = selectedRegions[0].value
    //     return towns
    //         .filter(town => town.regionId === id)
    //         .map(town => ({
    //             value: town.id,
    //             label: town.name,
    //     }))
    // } else {
    //     let selectedRegionsIds = selectedRegions.map(r => r.value)
    //     return towns
    //         .filter(town => selectedRegionsIds.includes(town.regionId))
    //         .map(town => {
    //             let region = selectedRegions.find(r => r.value === town.regionId)
    //             return {
    //                 value: town.id,
    //                 label: region.label + ', ' + town.name,
    //             }
    //     })
    // }
}

function getBusinessAreaSuggestions(areas) {
    return areas.map(area => ({
        value: area.id,
        label: area.mainName + ' - ' + area.detailedName,
    }))
}

function getEnvironmentSuggestions(environments) {
    return environments.map(env => ({
        value: env.id,
        label: env.name,
    }))
}

class InputForm extends React.Component {
    state = {
        activeStep: 0,
        // assetsLand: '',
        // assetsBuildings: '',
        // value: 0,
        // townsSuggestions: [],
        expandedAssets: false,
    };

    handleStep = step => () => {
        if (step === 2) {
            this.props.bigdataAction.getBigdata(
                this.props.modelState.commons.towns.value,
                this.props.modelState.commons.businessArea.value,
                this.props.modelState.commons.environment.value
            )
        }
        this.setState({
            activeStep: step
        });
    };

    handleNext = () => {
        if (this.state.activeStep === 1) {
            this.props.bigdataAction.getBigdata(
                this.props.modelState.commons.towns.value,
                this.props.modelState.commons.businessArea.value,
                this.props.modelState.commons.environment.value
            )
        }
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    handleRun = () => {
        // document.location.href='http://40.115.40.71:8118/output.php';
        // document.location.href='http://vh231124.eurodir.ru/output.php';
        this.props.outputAction.getOutput();
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

    handleExpandAssets = (expanded, frozen) => {
        if (IS_DEBUG) {
            console.log('NEPLOG: InputForm: handleExpandAssets: expanded = ' + expanded + ' frozed = ' + frozen);
            console.log(this.props);
        }
        if (!frozen) {
            // this.setState({expandedAssets: expanded})
            this.props.modelAction.fieldUpdated('existingAssets:isExpanded', expanded);
        }
    }

    constructor(props) {
        super(props);
        // props.regionsAction.getRegions();
        props.townsAction.getTowns();
        props.businessAreaAction.getBusinessArea();
        props.environmentAction.getEnvironment();
        // this.state.townsSuggestions = getTownsSuggestions(props.towns, props.regions);

        if (IS_DEBUG) {
            console.log('NEPLOG: InputForm: constructor: modelState = ' + props.modelState);
            // console.log(props.modelState);
            console.log(props);
            console.log(this.state);
        }
    }

    componentDidMount = (event) => {
        // this.props.regionsAction.getRegions(event);
        // this.props.townsAction.getTowns(event);
        // this.props.businessAreaAction.getBusinessArea(event);
        // this.props.environmentAction.getEnvironment(event);

        // const towns = getTownsSuggestions(this.props.towns, this.props.regions);
        // this.setState({ townsSuggestions: towns});

        if (IS_DEBUG) {
            console.log('NEPLOG: InputForm: componentDidMount: modelState = ' + this.props.modelState);
            // console.log(this.props.modelState);
            console.log(this.props);
            console.log(this.state);
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
            // console.log(this.props.modelState);
            console.log(this.props);
            console.log(this.state);
        }

        return (
            <MuiThemeProvider theme={theme}>
                {/*<div className={classes.fullWidth}>*/}
                {/*<div className={classes.overflowHidden}>*/}
                <div className={classes.inputContainer}>
                    <CmnAppBar icon='cancel' title='Вернуться назад' iconLink='/'/>
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
                    {/*<InputFieldRegionAutocomplete/>*/}

                    <div className={classes.stepperContainer}>
                        {/*<div>*/}
                            <Stepper
                                // className={[classes.clientWidth, classes.inputBackground].join(' ')}
                                className={classes.clientWidth}
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
                                            <StepContent className={classes.column}>
                                            {/*<StepContent>*/}
                                                {/*<div class="container">*/}
                                                    {/*<div class="row">*/}
                                                        {/*<div class="col">*/}
                                                            <Typography>{getStepContent(index, this.props, this.state, this)}</Typography>
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
                                                        {activeStep === steps.length - 1 ?
                                                            <Button
                                                                variant="raised"
                                                                color="primary"
                                                                onClick={this.handleRun}
                                                                className={[classes.button, classes.noBorder].join(' ')}
                                                                component={outputLink}
                                                                // to='/output'
                                                            >
                                                                Рассчитать модель
                                                            </Button> :
                                                            <Button
                                                                variant="raised"
                                                                color="primary"
                                                                onClick={this.handleNext}
                                                                className={[classes.button, classes.noBorder].join(' ')}
                                                            >
                                                                Далее
                                                            </Button>
                                                        }
                                                        {/*<Button*/}
                                                            {/*variant="raised"*/}
                                                            {/*color="primary"*/}
                                                            {/*onClick={(activeStep === steps.length - 1) ?*/}
                                                                {/*this.handleRun :*/}
                                                                {/*this.handleNext*/}
                                                            {/*}*/}
                                                            {/*className={[classes.button, classes.noBorder].join(' ')}*/}
                                                        {/*>*/}
                                                            {/*{activeStep === steps.length - 1 ? 'Рассчитать модель' : 'Далее'}*/}
                                                        {/*</Button>*/}
                                                        {/*<Link to='/output'>*/}
                                                        <a
                                                            href='http://vh231124.eurodir.ru/output.php'
                                                            className={activeStep === steps.length - 1 ? classes.singleLink : classes.invisible}
                                                        >
                                                            старый прототип
                                                        </a>
                                                    </div>
                                                </div>
                                            </StepContent>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                        {/*</div>*/}
                    </div>
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
        regions: store.regionsState.regions,
        // towns: store.townsState.towns,
        townsState: store.townsState,
        businessArea: store.businessAreaState.businessArea,
        environment: store.environmentState.environment,
        bigdata: store.bigdataState.bigdata,
        modelState: store.modelState,
        output: store.outputState.output,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        regionsAction: bindActionCreators(regionsAction, dispatch),
        townsAction: bindActionCreators(townsAction, dispatch),
        businessAreaAction: bindActionCreators(businessAreaAction, dispatch),
        environmentAction: bindActionCreators(environmentAction, dispatch),
        bigdataAction: bindActionCreators(bigdataAction, dispatch),
        modelAction: bindActionCreators(modelAction, dispatch),
        outputAction: bindActionCreators(outputAction, dispatch),
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

function getStepContent(step, props, state, th) {
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
                        {/*<div class="col">*/}
                            {/*<IntegrationReactSelect/>*/}
                            {/*<InputFieldRegion/>*/}
                            {/*<InputFieldAutocomplete*/}
                                {/*field='commons:regions'*/}
                                {/*value={props.modelState.commons.regions}*/}
                                {/*suggestions={getRegionsSuggestions(props.regions)}*/}
                                {/*title='Регион'*/}
                                {/*placeholder='Выберите регион...'*/}
                                {/*isMulti*/}
                            {/*/>*/}
                        {/*</div>*/}
                        {/*<div className="col">*/}
                            {/*<InputFieldRegionEnv/>*/}
                        {/*</div>*/}
                        <div className="col">
                            <InputFieldAutocomplete
                                field='commons:towns'
                                value={props.modelState.commons.towns}
                                // suggestions={getTownsSuggestions2(props.towns, props.regions)}
                                // suggestions={getTownsSuggestions2(props.towns, props.modelState.commons.regions)}
                                // suggestions={getTownsSuggestions0(props.towns, props.regions)}
                                suggestions={props.townsState.suggestions}
                                // suggestions={state.townsSuggestions}
                                //, props.modelState.commons.regions)}
                                title='Город'
                                placeholder='Выберите город...'
                                // isMulti
                            />
                        </div>
                        {/*</div>*/}
                    {/*<div class="row">*/}
                        <div class="col">
                            {/*<InputFieldArea/>*/}
                            <InputFieldAutocomplete
                                field='commons:businessArea'
                                value={props.modelState.commons.businessArea}
                                suggestions={getBusinessAreaSuggestions(props.businessArea)}
                                title='Направление деятельности'
                                placeholder='Выберите деятельность...'
                                // menuPosition='fixed'
                                // menuPosition='absolute'
                                // isMulti
                            />
                        </div>
                        <div className="col">
                            {/*<InputFieldRegionEnv/>*/}
                            <InputFieldAutocomplete
                                field='commons:environment'
                                value={props.modelState.commons.environment}
                                suggestions={getEnvironmentSuggestions(props.environment)}
                                title='Проходимость'
                                placeholder='Выберите расположение...'
                                // tip='Месторасположение'
                                maxMenuHeight={150}
                            />
                        </div>
                        {/*<div className="col">*/}
                            {/*<InputFieldTax/>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                    {/*</div>*/}
                    </div>
                    <br/>
                </div>
            )
        case 1:
            return (
                <div>
                    <div className={classes.panel}>
                        <div className="container no-gutters">
                            <div className="row">
                                <div className="col-sm-auto col-12">
                                    {/*Собственные денежные средства к вложению в проект*/}
                                    <InputFieldAmount field='invest:ownCash' value={props.modelState.invest.ownCash}
                                                      // label="Денежные средства"
                                                      fieldTitle='Свои денежные средства, планируемые к вложению'
                                                      tip="Собственные средства, в том числе для приобретения планируемых к покупке активов"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<ExpansionPanel className={classes.fullWidth}>*/}
                    {/*<ExpansionPanel className={[classes.fullWidth, classes.noShadow].join(' ')}>*/}
                    {/*<ExpansionPanel className={[classes.panel, classes.fullWidth].join(' ')}>*/}
                    <ExpansionPanel
                        className={classes.panel}
                        // expanded={state.expandedAssets}
                        // expanded={props.modelState.existingAssets.isExpanded}
                    >
                        {/*<ExpansionPanel className={[classes.fullWidth, classes.paddingZero].join(' ')}>*/}
                        {/*<ExpansionPanelSummary className={classes.paddingZero} expandIcon={<ExpandMoreIcon/>}>*/}
                        <ExpansionPanelSummary
                            classes={{
                                root: [classes.column, classes.justifyStart].join(' '),
                                firstChild: classes.compWidth,
                            }}
                            expandIcon={<ExpandMoreIcon />}
                            // onClick={th.handleExpandAssets(!state.expandedAssets)}
                            // onClick={th.handleExpandAssets(!props.modelState.existingAssets.isExpanded, props.modelState.existingAssets.isExpansionFrozen)}
                        >
                            <div class="container no-gutters">
                                <div class="row justify-content-sm-between">
                                    <div class="col-sm-auto col-12">
                                        <Typography
                                            className={classes.heading}
                                            // onClick={th.handleExpandAssets(!state.expandedAssets)}
                                        >
                                            Имеющиеся активы
                                            <BigTip/>
                                        </Typography>
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
                        <ExpansionPanelDetails className={classes.column}>
                            <div class="container no-gutters">
                                <div class="row justify-content-start">
                                    {/*<div className={"col " + classes.fixedWidth}>*/}
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount field='existingAssets:land' value={props.modelState.existingAssets.land} label="Земля" tip="Стоимость земли" bigTip='BigTip'/>
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
                                root: [classes.column, classes.justifyStart].join(' '),
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
                                        <InputFieldAmount value={model.getTotal(props.modelState.plannedAssets)} label="Всего" tip="Всего планируемых к покупке активов" defaultValue={0} disabled/>
                                        <InputFieldAmount value={model.getStep2ToBorrow(props.modelState)} label="за счет заемных средств" tip="в том числе за счет заемных средств" defaultValue={0} disabled/>
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelSummary>
                        {/*<ExpansionPanelDetails className={classes.container}>*/}
                        <ExpansionPanelDetails className={classes.column}>
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
                                {/*<div className="col-sm-auto col-12">*/}
                                    {/*<InputFieldAmount field='invest:ownCash' value={props.modelState.invest.ownCash} label="Денежные средства" tip="Собственные денежные средства к вложению в проект"/>*/}
                                {/*</div>*/}
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
                                    {/*<InputFieldAmount field='invest:loanRate' value={props.modelState.invest.loanRate} label="% ставка" tip="Ставка привлечения заемных средств" flType={fields.FLTYPE_NUMBER} adornment="%" disabled={(model.getStep2ToBorrow(props.modelState) == 0)} />*/}
                                    <InputFieldAmount field='invest:loanRate' value={props.modelState.invest.loanRate} label="% ставка" tip="Ставка привлечения заемных средств" flType={fields.FLTYPE_NUMBER} adornment="%" invisible={(model.getStep2ToBorrow(props.modelState) == 0)} />
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
                    <div className='row'>
                        <div className={classes.paddingPlus45 + ' col'}>
                            <Typography variant='caption'>
                                Данные на этом шаге представлены в <span style={{color: 'red'}}>ДЕМО</span>
                                -режиме и недоступны для редактирования.
                                Для переключения на основной режим и работы с детальными данными, необходимо авторизоваться.
                                <Link to='/' style={{color: 'primary'}}>Узнать больше...</Link>
                            </Typography>
                        </div>
                        <div className='col-4'>
                            <Button
                                variant="raised"
                                // color="primary"
                                color="secondary"
                                // onClick={this.handleNext}
                                className={[classes.button, classes.noBorder].join(' ')}
                            >
                                Выключить демо-режим
                            </Button>
                        </div>
                    </div>
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
                        <ExpansionPanelDetails className={classes.column}>
                            <div className="container no-gutters">
                                <div className="row justify-content-start">
                                    <InputFieldCalculator/>
                                </div>
                                <div className="row justify-content-start">
                                    {/*<div className="col-sm-auto col-12">*/}
                                        {/*<InputFieldAmount value={model.getStep3AveragePrice(props.modelState, 0)} label="Цена" tip="Средняя цена реализации" disabled/>*/}
                                    {/*</div>*/}
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldNumber id="field-input-income-amount" label="Продажи" tip="Среднее количество продаж в день" />*/}
                                        {/*<InputFieldAmount id={fields.FL_INCOME_AVERAGE_SALES_PER_DAY} label="Продажи" tip="Среднее количество продаж в день" flType={fields.FLTYPE_NUMBER} adornment="ед."/>*/}
                                        <InputFieldAmount value={model.getStep3AverageSalesPerMonth(props.modelState, 0)} label="Количество продаж" tip="Среднее количество продаж в месяц" flType={fields.FLTYPE_NUMBER} adornment="ед." disabled/>
                                    </div>
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_INCOME_PER_MONTH} label="Выручка" tip="Среднемесячная выручка" />*/}
                                        <InputFieldAmount value={model.getStep3IncomePerMonth(props.modelState, 0)} label="Выручка" tip="Среднемесячная выручка" disabled/>
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
                                    {/*<div className={(props.modelState.expenses.isManual) ?*/}
                                        {/*"col-sm-auto col-12" :*/}
                                        {/*classes.invisible + " col-sm-auto col-12"*/}
                                    {/*}>*/}
                                    <div className="col-sm-auto col-12">
                                        <InputFieldAmount value={model.getStep3ExpensesTotal(props, 0).toFixed(2)} label="Всего" tip="Всего расходов" disabled/>
                                        <InputFieldAmount value={model.getStep3PrimeCost(props, 0).toFixed(2)} label="в т.ч. себестоимость" tip="" defaultValue={0} disabled/>
                                    </div>
                                </div>
                                <div className="row justify-content-sm-start">
                                    <div className="col-sm-auto col-12">
                                        <InputFieldsManualExpenses/>
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
                                                    <InputFieldAmount field='expenses:managementCount' value={props.modelState.expenses.managementCount} label="Численность" tip="Количество сотрудников" adornment="чел." flType={fields.FLTYPE_NUMBER}/>
                                                </div>
                                                <div className="col-sm-auto col-12">
                                                    <InputFieldAmount field='expenses:managementSalary' value={N(props.modelState.expenses.managementSalary).toFixed(2)} label="Средняя зарплата" tip="Средняя зарплата 1 чел. в месяц"/>
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
                                                    <InputFieldAmount  field='expenses:employeeCount' value={props.modelState.expenses.employeeCount} label="Численность" tip="Количество сотрудников" adornment="чел." flType={fields.FLTYPE_NUMBER}/>
                                                </div>
                                                <div className="col-sm-auto col-12">
                                                    <InputFieldAmount  field='expenses:employeeSalary' value={N(props.modelState.expenses.employeeSalary).toFixed(2)} label="Средняя зарплата" tip="Средняя зарплата 1 чел. в месяц"/>
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
                                                    <InputFieldAmount field='expenses:rent' value={N(props.modelState.expenses.rent).toFixed(2)} label="Аренда и коммунальные" tip="Средняя аренда и коммунальные платежи и в месяц" />
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col-sm-auto col-12">
                                                    <InputFieldAmount field='expenses:transport' value={N(props.modelState.expenses.transport).toFixed(2)} label="Транспорт" tip="Транспортные расходы в месяц" />
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col-sm-auto col-12">
                                                    <InputFieldAmount field='expenses:taxes' value={N(props.modelState.expenses.taxes).toFixed(2)} label="Налоги" tip="Средняя сумма налогов и сборов в месяц" />
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col-sm-auto col-12">
                                                    <InputFieldAmount field='expenses:others' value={N(props.modelState.expenses.others).toFixed(2)} label="Прочее" tip="Прочие расходы" />
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
                                        {/*<InputFieldAmount value={model.getStep3GrossMargin(props.modelState)} label="Валовая рентабельность" tip="Валовая рентабельность" flType={fields.FLTYPE_NUMBER} adornment="%" disabled/>*/}
                                        <InputFieldSwitchable
                                            value={model.getStep3GrossProfitabilityFromBigDataPrc(props).toFixed(2)}
                                            field2='finance:grossProfitability' value2={props.modelState.finance.grossProfitability}
                                            fieldChecked='finance:isManualGrossProfitability'
                                            label="Валовая рентабельность"
                                            tip="Валовая рентабельность"
                                            flType={fields.FLTYPE_NUMBER}
                                            adornment="%" disabled
                                        />
                                    </div>
                                    < div className = "col-sm-auto col-12" >
                                    {/*<div className={(props.model.flExpensesIsManual == 0) ? 'invisible col-sm-auto col-12' :  'col-sm-auto col-12'}>*/}
                                        <InputFieldAmount value={model.getStep3NetProfitabilityPrc(props, 0).toFixed(2)} label="Чистая рентабельность" tip="Чистая рентабельность" flType={fields.FLTYPE_NUMBER} adornment="%" disabled/>
                                    </div>
                                    <div className="w-100"></div>
                                    {/*<div className="col-sm-auto col-12">*/}
                                        {/*/!*<InputFieldNumber id="field-input-params-loanrate" label="% ставка" tip="Ставка привлечения заемных средств" adornment="%"/>*!/*/}
                                        {/*<InputFieldAmount id={fields.FL_PARAMS_LOAN_RATE} label="% ставка" tip="Ставка привлечения заемных средств" flType={fields.FLTYPE_NUMBER} adornment="%"/>*/}
                                    {/*</div>*/}
                                    <div className="col-sm-auto col-12">
                                        {/*<InputFieldAmount id={fields.FL_PARAMS_DIVIDENTS} label="Дивиденды" tip="Выплата дивидендов в месяц. Сколько планируете изымать из бизнеса в месяц."/>*/}
                                        {/*Сколько планируете изымать из бизнеса в месяц*/}
                                        <InputFieldAmount field='finance:dividents' value={props.modelState.finance.dividents}
                                                          label="Доход учредителя" tip="Ежемесячный доход учредителя"
                                                          fieldTitle='Сколько планируете изымать из бизнеса в месяц?'
                                        />
                                    </div>
                                    <div class="col">
                                        {/*Какая детализация формируемых отчетов необходима?*/}
                                        <InputFieldStride/>
                                    </div>
                                </div>
                            </div>
                     </div>
                        {/*</ExpansionPanelDetails>*/}
                    {/*</ExpansionPanel>*/}
                    <div>
                        <br/>
                        <div className='row'>
                            {/*<div className='col text-center'>*/}
                            <div className={classes.paddingPlus45 + ' col'}>
                                <Typography variant='caption'>
                                    Период планирования в отчетах - 60 месяцев
                                </Typography>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            );
        default:
            return 'Unknown step';
    }
}

function N(value) {
    return isNaN(value) ? 0 : Number(value);
}
