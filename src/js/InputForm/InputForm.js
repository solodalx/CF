import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
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

import InputFieldAmount from './InputFieldAmount.js'
import InputFieldNumber from './InputFieldNumber.js'
import InputFieldDate from './InputFieldDate.js'
import InputFieldRegion from './InputFieldRegion.js'
import InputFieldArea from './InputFieldArea.js'
import InputFieldTax from './InputFieldTax.js'
import InputFieldRegionEnv from './InputFieldRegionEnv.js'
// import SimpleTabs from '../Others/TabsExample.js'
// import VerticalLinearStepper from '../Others/StepperExample'
import IntegrationReactSelect from './InputFieldRegionAutocomplete.js'
//import IntegrationDownshift from './AutocompleteExample0.js'

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


function TabContainer(props) {
    return (
        //<Typography component="div" style={{ padding: 8 * 3 }}>
        <Typography component="div" style={{display: 'flex', flexWrap: 'wrap'}}>
        {/*<Typography component="div" className={props.container}>*/}
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
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
            //<div className={classes.fullWidth}>
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        {/*<div class="contaner">*/}
                            {/*<div class="row align-items-center justify-content-between">*/}
                                {/*<div class="col-1 no-gutters">*/}
                                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                        <Cancel />
                                    </IconButton>
                                {/*</div>*/}
                                {/*<div className="col-10 justify-content-start no-gutters">*/}
                                    <Typography variant="title" color="inherit" className={classes.flex}>
                                        Ввод данных для расчета модели
                                    </Typography>
                                {/*</div>*/}
                                {/*<div className="col-1 order-last">*/}
                                    {/*<Button color="inherit">Login</Button>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </Toolbar>
                </AppBar>

                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label} className={classes.alignLeft}>
                            {/*<Step key={label}>*/}
                                {/*<StepLabel className={classes.stepHeading}>{label}</StepLabel>*/}
                                <StepLabel>{label}</StepLabel>
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
        );
    }
}

InputForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputForm);

function getStepContent(step, props) {
    const { classes } = props;

    switch (step) {
        case 0:
            return (
                <div class="container no-gutters">
                    <div class="row justify-content-start">
                        <div class="col">
                            <InputFieldDate id="field-input-general-datestart" label="Старт" helperText="Дата начала проекта" defaultValue=""/>
                        </div>
                        <div class="col">
                            <InputFieldNumber id="field-input-general-term" label="Срок" helperText="Ожидаемый срок проекта" adornment="мес."/>
                        </div>
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
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <div class="container no-gutters">
                                <div class="row justify-content-between">
                                    <div class="col">
                                        <Typography className={classes.heading}>Имеющиеся активы</Typography>
                                    </div>
                                    <div className="col text-nowrap text-right">
                                        <InputFieldAmount id="field-input-assets-total" label="Всего собственных средств" helperText="" />
                                    </div>
                                </div>
                            </div>
                            {/*<InputFieldAmount className={classes.alignRight} id="field-input-assets-total" label="" helperText="" />*/}
                        </ExpansionPanelSummary>
                        {/*<ExpansionPanelDetails className={classes.container}>*/}
                        <ExpansionPanelDetails>
                            <div class="container no-gutters">
                                <div class="row justify-content-start">
                                    <div class="col">
                                        <InputFieldAmount id="field-input-assets-land" label="Земля" helperText="Стоимость земли" />
                                    </div>
                                    <div class="col">
                                        <InputFieldAmount id="field-input-assets-buildings" label="Здания" helperText="Стоимость зданий" />
                                    </div>
                                    <div class="col">
                                        <InputFieldAmount id="field-input-assets-equipment" label="Оборудование" helperText="Стоимость оборудования" />
                                    </div>
                                    <div class="col">
                                        <InputFieldAmount id="field-input-assets-transport" label="Транспорт" helperText="Стоимость транспорта" />
                                    </div>
                                    <div class="col">
                                        <InputFieldAmount id="field-input-assets-intangible" label="НМА" helperText="Стоимость нематериальных активов" />
                                    </div>
                                    <div class="col">
                                        <InputFieldAmount id="field-input-assets-others" label="Прочее" helperText="Стоимость прочих активов" />
                                    </div>
                                    <div className="col">
                                        <InputFieldAmount id="field-input-assets-additional" label="Доп. средства" helperText="Дополнительные собственные средства"/>
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
                                        <InputFieldAmount id="field-input-inv-total" label="Всего заемных средств" helperText="" />
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelSummary>
                        {/*<ExpansionPanelDetails className={classes.container}>*/}
                        <ExpansionPanelDetails>
                            <div className="container no-gutters">
                                <div className="row justify-content-start">
                                    <div className="col">
                                        <InputFieldAmount id="field-input-inv-land" label="Земля" helperText="Инвестиции в землю"/>
                                    </div>
                                    <div className="col">
                                        <InputFieldAmount id="field-input-inv-buildings" label="Здания" helperText="Инвестиции в здания"/>
                                    </div>
                                    <div className="col">
                                        <InputFieldAmount id="field-input-inv-equipment" label="Оборудование" helperText="Инвестиции в оборудование"/>
                                    </div>
                                    <div className="col">
                                        <InputFieldAmount id="field-input-inv-transport" label="Транспорт" helperText="Инвестиции в транспорт"/>
                                    </div>
                                    <div className="col">
                                        <InputFieldAmount id="field-input-inv-intangible" label="НМА" helperText="Инвестиции в нематериальные активы"/>
                                    </div>
                                    <div className="col">
                                        <InputFieldAmount id="field-input-inv-others" label="Прочее" helperText="Инвестиции в прочие активы"/>
                                    </div>
                                </div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    {/*<div className={classes.container}>*/}
                    <div class="container no-gutters">
                        <div class="row">
                            <div class="col">
                                <InputFieldAmount id="field-input-inv-total" label="Всего инвестиций" helperText="" />
                            </div>
                            {/*<div class="col">*/}
                                {/*<InputFieldAmount id="field-input-inv-own" label="Собственные средства" helperText="" />*/}
                            {/*</div>*/}
                            {/*<div class="col">*/}
                                {/*<InputFieldAmount id="field-input-inv-borrowed" label="Заемные средства" helperText="" />*/}
                            {/*</div>*/}
                            <div class="col">
                                <InputFieldNumber id="field-calc-inv-ratio" label="" helperText="Соотношение собственных и заемных средств" />
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
                            <Typography className={classes.heading}>Доходная часть</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.container}>
                            <InputFieldAmount id="field-input-income-price" label="Средняя цена реализации" helperText="" />
                            <InputFieldAmount id="field-input-income-amount" label="Среднее количество продаж в день" helperText="" />
                            <InputFieldAmount id="field-input-income-earning" label="Среднемесячная выручка" helperText="" />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.fullWidth}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Расходная часть</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.container}>
                            <InputFieldAmount id="field-input-expenses-taxes" label="Налоги" helperText="Введите среднюю сумму налогов в месяц" />
                            <InputFieldAmount id="field-input-expenses-salary" label="Заработная плата" helperText="Введите среднюю заработную плату в месяц" />
                            <InputFieldAmount id="field-input-expenses-rent" label="Аренда" helperText="" />
                            <InputFieldAmount id="field-input-expenses-transport" label="Транспортные расходы" helperText="" />
                            <InputFieldAmount id="field-input-expenses-others" label="Прочие расходы" helperText="" />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
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
