import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modelAction from '../../common/actions/modelAction';

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
import * as fields from "../../common/constants/fieldConstants";
import * as model from "../../common/model";
import {IS_DEBUG} from '../../common/properties';

const styles = theme => ({
    marginMinus15: {
        marginLeft: -15,
    },
    marginMinus10: {
        marginLeft: -10,
    },
    marginZero: {
        marginLeft: 0,
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
    paddingRightZero: {
        paddingRight: 0,
    },
    paddingBottomZero: {
        paddingBottom: 0,
    },
    noShadow: {
        boxShadow: 'none',
    },

});

class InputFieldsManualExpenses extends React.Component {
    state = {
        checkedManualExpenses: false,
        // checkedManualExpenses: this.props.modelAction.getExpensesManual(this.props.model),
    };

    handleChange = name => event => {
        if (IS_DEBUG) {
            console.log('NEPLOG: InputFieldsManualExpenses: handleChange: name = ' + name + ', event = ' + event + ', modelState = ' + this.props.modelState);
            console.log(event);
            console.log(this.props.modelState);
        }
        // this.props.modelAction.setExpensesManual(this.props.model, event.target.checked);
        this.props.modelAction.fieldUpdated('expenses:isManual', event.target.checked);
        this.setState({[name]: event.target.checked});
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.marginMinus15}>
                <Tooltip title="Использовать BigData в расчетах, или ввести расходную часть вручную" placement="center">
                    <FormControlLabel
                        control={
                            <div className='container'>
                                <div className='row flex-sm-nowrap align-items-center'>
                                    <div className='col-6 col-sm-4 text-right'>
                                       {/*<span>*/}
                                       Использовать BigData
                                       {/*</span>*/}
                                    </div>
                                    <div className={[classes.paddingZero, classes.paddingRightZero].join(' ') + ' col-auto'}>
                                        <Switch
                                            checked={this.state.checkedManualExpenses}
                                            onChange={this.handleChange('checkedManualExpenses')}
                                            value="checkedManualExpenses"
                                        />
                                    </div>
                                    <div className='col-2 text-left'>
                                        <span>Ввести вручную</span>
                                    </div>
                                </div>
                            </div>
                        }
                        // label="Ввести вручную"
                    />
                </Tooltip>
            </div>
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

InputFieldsManualExpenses.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(InputFieldsManualExpenses);
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(InputFieldsManualExpenses));
