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

import InputFieldAmount from './InputFieldAmount'

const styles = theme => ({
    marginMinus30: {
        marginLeft: -30,
    },
    marginMinus15: {
        marginLeft: -15,
    },
    paddingMinus15: {
        paddingLeft: -15,
    },

});

class InputFieldSwitchable extends React.Component {
    state = {
        checkedField: false,
    };

    handleChange = name => event => {
        this.props.modelAction.fieldUpdated(this.props.fieldChecked, event.target.checked);
        if (event.target.checked) {
            this.props.modelAction.fieldUpdated(this.props.field2, this.props.value);
        }
        this.setState({[name]: event.target.checked});
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.marginMinus30}>
                <FormControlLabel
                    control={
                        <div className="container">
                            {/*<div className="row flex-sm-nowrap align-items-center justify-content-start">*/}
                            <div className="row flex-sm-nowrap justify-content-start">
                                <div className="col-1">
                                    <Tooltip title={this.state.checkedField ? 'Задайте вручную' : 'Загружено с BigData'} placement="center">
                                        <Switch
                                            checked={this.state.checkedField}
                                            onChange={this.handleChange('checkedField')}
                                            value="checkedField"
                                        />
                                    </Tooltip>
                                </div>
                                <div className="col offset-1">
                                    <InputFieldAmount
                                        field={this.state.checkedField ? this.props.field2 : this.props.field}
                                        value={this.state.checkedField ? this.props.value2 : this.props.value}
                                        id={this.props.id}
                                        label={this.props.label}
                                        tip={this.props.tip}
                                        flType={this.props.flType}
                                        disabled={!this.state.checkedField}/>
                                </div>
                            </div>
                        </div>
                    }
                    label=''
                />
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

InputFieldSwitchable.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(InputFieldSwitchable);
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(InputFieldSwitchable));

