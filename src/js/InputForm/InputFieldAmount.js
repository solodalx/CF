import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import NumberFormat from 'react-number-format';
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
    inputWidth: {
        // width: 200,
        [theme.breakpoints.down('xs')]: {
            // minWidth: '100%',
            minWidth: 50,
            maxWidth: 200,
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            width: 200,
        },
    },
    inputLabel: {
        // color: 'purple',
    }
});


function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            ref={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            thousandSeparator=' '
            // prefix="$"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};


class InputFieldAmount extends React.Component {
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
            //<div className={classes.input}>
            //<div className={classes.input}>
            <div>
                {/*<Tooltip className={classes.input} title={this.props.tip} placement="center">*/}
                <Tooltip title={this.props.tip} placement="center">
                    {/*<FormControl className={classes.formControl}>*/}
                    <TextField
                        id={this.props.id}
                        label={this.props.label}
                        // className={classes.textField}
                        className={classes.inputWidth}
                        // value={this.state.assetsLand}
                        defaultValue=""
                        helperText={this.props.helperText}
                        onChange={this.handleChange('assetsLand')}
                        // margin="normal"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">р.</InputAdornment>,
                            //className: classes.input
                            inputComponent: NumberFormatCustom,
                        }}
                        InputLabelProps={{
                            className: classes.inputLabel
                        }}
                        disabled={this.props.disabled}
                    />
                    {/*</FormControl>*/}
                </Tooltip>
                {/*<Tooltip id={this.props.id}>Подсказка</Tooltip>*/}
            </div>
        );
    }
}

InputFieldAmount.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputFieldAmount);
// export default ComposedTextField;


