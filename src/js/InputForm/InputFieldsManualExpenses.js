import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import InputFieldSwitchable from './InputFieldSwitchable'

const styles = theme => ({});

class InputFieldsManualExpenses extends React.Component {
    state = {
        checkedManualExpenses: false,
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.checked});
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                {/*<ExpansionPanel className={classes.fullWidth}>*/}
                <ExpansionPanel expanded={this.state.checkedManualExpenses}>
                    {/*<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>*/}
                    <ExpansionPanelSummary>
                        <div className="container no-gutters">
                            <div className="row justify-content-between">
                                <div className="col">
                                    <Tooltip title="Применять ручные корректировки себестоимости" placement="center">
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.checkedManualExpenses}
                                                    onChange={this.handleChange('checkedManualExpenses')}
                                                    value="checkedManualExpenses"
                                                />
                                            }
                                            label="Ручная корректировка"
                                        />
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </ExpansionPanelSummary>
                    {/*<ExpansionPanelDetails className={classes.container}>*/}
                    <ExpansionPanelDetails>
                        <div className="container no-gutters">
                            <div className="row justify-content-start">
                                <div className="col">

                                    <div className="container no-gutters">
                                        <div className="row justify-content-start">
                                            Затраты на управленческий персонал
                                        </div>
                                        <div className="row justify-content-start">
                                            <div className="col">
                                                <InputFieldSwitchable id="field-input-expenses-managementcount" label="Кол-во" tip="Количество сотрудников"/>
                                            </div>
                                            <div className="col">
                                                <InputFieldSwitchable id="field-input-expenses-managementsalary" label="З/П" tip="Средняя заработная плата в месяц"/>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col">

                                    <div className="container no-gutters">
                                        <div className="row justify-content-start">
                                            Затраты на персонал производства
                                        </div>
                                        <div className="row justify-content-start">
                                            <div className="col">
                                                <InputFieldSwitchable id="field-input-expenses-employeecount" label="Кол-во" tip="Количество сотрудников"/>
                                            </div>
                                            <div className="col">
                                                <InputFieldSwitchable id="field-input-expenses-employeesalary" label="З/П" tip="Средняя заработная плата в месяц"/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="row justify-content-start">
                                <div className="col">
                                    Другие расходы
                                </div>
                            </div>
                            <div className="row justify-content-start">
                                <div className="col">
                                    <InputFieldSwitchable id="field-input-expenses-rent" label="Аренда" tip="Средняя аредна в месяц"/>
                                </div>
                                <div className="col">
                                    <InputFieldSwitchable id="field-input-expenses-transport" label="Транспорт" tip="Транспортные расходы в месяц" />
                                </div>
                                <div className="col">
                                    <InputFieldSwitchable id="field-input-expenses-others" label="Прочее" tip="Прочие расходы" />
                                </div>
                            </div>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>




            </div>
        );
    }
}

InputFieldsManualExpenses.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputFieldsManualExpenses);


