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

import InputFieldAmount from './InputFieldAmount.js'
import InputFieldNumber from './InputFieldNumber.js'
import InputFieldDate from './InputFieldDate.js'
import InputFieldRegion from './InputFieldRegion.js'
import InputFieldArea from './InputFieldArea.js'
import InputFieldTax from './InputFieldTax.js'
import InputFieldRegionEnv from './InputFieldRegionEnv.js'
import InputFieldStride from './InputFieldStride.js'
import InputFieldsManualExpenses from './InputFieldsManualExpenses.js'
// import SimpleTabs from '../Others/TabsExample.js'
// import VerticalLinearStepper from '../Others/StepperExample'
import IntegrationReactSelect from './InputFieldRegionAutocomplete.js'
//import IntegrationDownshift from './AutocompleteExample0.js'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
    palette: {
        primary: {main: green[400]}, // Purple and green play nicely together.
        //primary: { main: purple[500] }, // Purple and green play nicely together.
        //secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
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
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    flex: {
        // flex: 1,
    },
    // stepHeading: {
    //     fontSize: theme.typography.pxToRem(32),
    //     fontWeight: theme.typography.fontWeightRegular,
    // },
    heading: {
        fontSize: theme.typography.pxToRem(24),
        fontWeight: theme.typography.fontWeightRegular,
        // color: "",
    },
    fullWidth: {
        width: '100%',
    },
    alignLeft: {
        textAlign: 'left',
    },
    alignRight: {
        textAlign: 'right',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
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
                <div>
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            {/*<div class="contaner">*/}
                                {/*<div class="row align-items-center justify-content-between">*/}
                                    {/*<div class="col-1 no-gutters">*/}
                                        {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">*/}
                                            {/*<Cancel />*/}
                                        {/*</IconButton>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-10 justify-content-start no-gutters">*/}
                                        <Typography variant="title" color="inherit" className={classes.flex}>
                                            {/*Ввод данных для расчета модели*/}
                                            Независимая экспертиза проектов
                                        </Typography>
                                    {/*</div>*/}
                                    {/*<div className="col-1 order-last">*/}
                                        {/*<Button color="inherit">Login</Button>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </Toolbar>
                    </AppBar>

                    <Stepper activeStep={activeStep} orientation="vertical" nonLinear>
                        {steps.map((label, index) => {
                            return (
                                <Step key={label} className={classes.alignLeft}>
                                {/*<Step key={label}>*/}
                                    {/*<StepLabel className={classes.stepHeading}>{label}</StepLabel>*/}
                                    {/*<StepLabel>{label}</StepLabel>*/}
                                    <StepButton
                                        onClick={this.handleStep(index)}
                                    >
                                        {label}
                                    </StepButton>
                                    <StepContent>
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
                <div class="container no-gutters">
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
                    <ExpansionPanel className={classes.fullWidth}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <div class="container no-gutters">
                                <div class="row justify-content-between">
                                    <div class="col">
                                        <Typography className={classes.heading}>Имеющиеся активы</Typography>
                                    </div>
                                    <div className="col text-nowrap text-right">
                                        <InputFieldAmount id="field-input-assets-total" label="Всего" tip="Всего собственных средств" disabled/>
                                    </div>
                                </div>
                            </div>
                            {/*<InputFieldAmount className={classes.alignRight} id="field-input-assets-total" label="" tip="" />*/}
                        </ExpansionPanelSummary>
                        {/*<ExpansionPanelDetails className={classes.container}>*/}
                        <ExpansionPanelDetails>
                            <div class="container no-gutters">
                                <div class="row justify-content-start">
                                    <div class="col">
                                        <InputFieldAmount id="field-input-assets-land" label="Земля" tip="Стоимость земли" />
                                    </div>
                                    <div class="col">
                                        <InputFieldAmount id="field-input-assets-buildings" label="Здания" tip="Стоимость зданий" />
                                    </div>
                                    <div class="col">
                                        <InputFieldAmount id="field-input-assets-equipment" label="Оборудование" tip="Стоимость оборудования" />
                                    </div>
                                    <div class="col">
                                        <InputFieldAmount id="field-input-assets-transport" label="Транспорт" tip="Стоимость транспорта" />
                                    </div>
                                    <div class="col">
                                        <InputFieldAmount id="field-input-assets-intangible" label="НМА" tip="Стоимость нематериальных активов" />
                                    </div>
                                    <div class="col">
                                        <InputFieldAmount id="field-input-assets-others" label="Прочее" tip="Стоимость прочих активов" />
                                    </div>
                                    <div className="col">
                                        <InputFieldAmount id="field-input-assets-additional" label="Доп. средства" tip="Дополнительные собственные средства"/>
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.fullWidth}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <div className="container no-gutters">
                                <div className="row justify-content-between">
                                    <div className="col">
                                        <Typography className={classes.heading}>Планируемые инвестиции</Typography>
                                    </div>
                                    <div className="col text-nowrap text-right">
                                        <InputFieldAmount id="field-input-inv-total" label="Всего" tip="Всего заемных средств" disabled/>
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelSummary>
                        {/*<ExpansionPanelDetails className={classes.container}>*/}
                        <ExpansionPanelDetails>
                            <div className="container no-gutters">
                                <div className="row justify-content-start">
                                    <div className="col">
                                        <InputFieldAmount id="field-input-inv-land" label="Земля" tip="Инвестиции в землю"/>
                                    </div>
                                    <div className="col">
                                        <InputFieldAmount id="field-input-inv-buildings" label="Здания" tip="Инвестиции в здания"/>
                                    </div>
                                    <div className="col">
                                        <InputFieldAmount id="field-input-inv-equipment" label="Оборудование" tip="Инвестиции в оборудование"/>
                                    </div>
                                    <div className="col">
                                        <InputFieldAmount id="field-input-inv-transport" label="Транспорт" tip="Инвестиции в транспорт"/>
                                    </div>
                                    <div className="col">
                                        <InputFieldAmount id="field-input-inv-intangible" label="НМА" tip="Инвестиции в нематериальные активы"/>
                                    </div>
                                    <div className="col">
                                        <InputFieldAmount id="field-input-inv-others" label="Прочее" tip="Инвестиции в прочие активы"/>
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <div>
                        <br/>
                        <br/>
                    </div>
                    {/*<div className={classes.container}>*/}
                    <div class="container no-gutters">
                        <div class="row">
                            <div class="col">
                                <InputFieldAmount id="field-input-inv-total" label="Инвестиции" tip="Всего инвестиций" disabled/>
                            </div>
                            <div className="col">
                                <InputFieldAmount id="field-input-inv-total" label="в т.ч. уже вложено" tip="в т.ч. уже вложено" disabled/>
                            </div>
                            {/*<div class="col">*/}
                                {/*<InputFieldAmount id="field-input-inv-own" label="Собственные средства" tip="" />*/}
                            {/*</div>*/}
                            {/*<div class="col">*/}
                                {/*<InputFieldAmount id="field-input-inv-borrowed" label="Заемные средства" tip="" />*/}
                            {/*</div>*/}
                            <div class="col">
                                <InputFieldNumber id="field-calc-inv-ratio" label="Собст./Заем." tip="Соотношение собственных и заемных средств" disabled/>
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
                    <ExpansionPanel className={classes.fullWidth}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <div className="container no-gutters">
                                <div className="row justify-content-between">
                                    <div className="col">
                                        <Typography className={classes.heading}>Доходная часть</Typography>
                                    </div>
                                    <div className="col text-nowrap text-right">
                                        <InputFieldAmount id="field-input-income-total" label="Всего" tip="Всего доходов" />
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.container}>
                            <div className="container no-gutters">
                                <div className="row justify-content-start">
                                    <div className="col">
                                        <InputFieldAmount id="field-input-income-price" label="Цена" tip="Средняя цена реализации" />
                                    </div>
                                    <div class="col">
                                        <InputFieldNumber id="field-input-income-amount" label="Продажи" tip="Среднее количество продаж в день" />
                                    </div>
                                    <div class="col">
                                        <InputFieldAmount id="field-input-income-earning" label="Выручка" tip="Среднемесячная выручка" />
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.fullWidth}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <div className="container no-gutters">
                                <div className="row justify-content-between">
                                    <div className="col">
                                        <Typography className={classes.heading}>Расходная часть</Typography>
                                    </div>
                                    <div className="col text-nowrap text-right">
                                        <InputFieldAmount id="field-input-expenses-total" label="Всего" tip="Всего расходов" />
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.container}>
                            <div className="container no-gutters">
                                <div className="row justify-content-start">
                                    <div className="col">
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
                                    <div className="col">
                                        <InputFieldNumber id="field-input-expenses-grossmargin" label="Валовая рентабельность" tip="Валовая рентабельность" adornment="%"/>
                                    </div>
                                    <div className="col">
                                        <InputFieldNumber id="field-input-expenses-netmargin" label="Чистая рентабельность" tip="Чистая рентабельность" adornment="%"/>
                                    </div>
                                </div>
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
                            <div className="container no-gutters">
                                <div className="row justify-content-start">
                                    <div className="col">
                                        <InputFieldNumber id="field-input-params-loanrate" label="% ставка" tip="Ставка привлечения заемных средств" adornment="%"/>
                                    </div>
                                    <div className="col">
                                        <InputFieldAmount id="field-input-params-dividends" label="Дивиденды" tip="Выплата дивидендов в месяц"/>
                                    </div>
                                    <div class="col">
                                        <InputFieldStride/>
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
