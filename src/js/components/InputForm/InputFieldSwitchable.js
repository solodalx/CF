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
        this.setState({[name]: event.target.checked});
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.marginMinus30}>
                <div className="container">
                    <div className="row justify-content-start flex-nowrap">
                        <div className="col-1">
                            {/*<ExpansionPanel className={classes.fullWidth}>*/}
                            <Tooltip title="Задать вручную" placement="center">
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={this.state.checkedField}
                                            onChange={this.handleChange('checkedField')}
                                            value="checkedField"
                                        />
                                    }
                                    label=""
                                />
                            </Tooltip>
                        </div>
                        <div className="col offset-1">
                            <InputFieldAmount id={this.props.id} label={this.props.label} tip={this.props.tip} flType={this.props.flType} disabled={!this.state.checkedField}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

InputFieldSwitchable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputFieldSwitchable);

