import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    // container: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    // },
    // formControl: {
    //     // display: 'flex',
    //     // flexWrap: 'wrap',
    //     margin: theme.spacing.unit,
    // },
    // textField: {
    //     marginLeft: theme.spacing.unit,
    //     marginRight: theme.spacing.unit,
    //     width: 200,
    // },
    input: {
        width: 200,
    },
    inputLabel: {
        color: 'purple',
    }
});

class InputFieldNumber extends React.Component {
    // state = {
    //     assetsLand: '',
    //     assetsBuildings: '',
    // };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            //<div className={classes.container}>
            <div>
                <Tooltip title={this.props.tip} placement="center">
                    {/*<FormControl className={classes.formControl}>*/}
                    <TextField
                        id={this.props.id}
                        label={this.props.label}
                        //className={classes.textField}
                        // value={this.state.assetsLand}
                        defaultValue={this.props.defaultValue}
                        helperText={this.props.helperText}
                        onChange={this.handleChange("Value")}
                        // margin="normal"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">{this.props.adornment}</InputAdornment>,
                            className: classes.input
                            // disabled: {this.props.disabled},
                        }}
                        InputLabelProps={{
                            className: classes.inputLabel
                        }}
                        disabled={this.props.disabled}
                    />
                    {/*</FormControl>*/}
                </Tooltip>
            </div>
        );
    }
}

InputFieldNumber.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputFieldNumber);


