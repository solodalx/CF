import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    // root: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    // },
    formControl: {
        margin: theme.spacing.unit,
        // minWidth: 200,
        // minWidth: 350,
        // minWidth: '100%',
        // width: '100%',
        [theme.breakpoints.down('xs')]: {
            minWidth: 150,
            maxWidth:350,
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            minWidth: 350,
        },
    },
    // selectEmpty: {
    //     marginTop: theme.spacing.unit * 2,
    // },
});

class InputFieldRegionEnv extends React.Component {
    state = {
        fieldValue: '',
        name: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            //<form className={classes.root} autoComplete="off">
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="field-input-general-env">Характер окружения</InputLabel>
                    <Select
                        value={this.state.fieldValue}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'fieldValue',
                            id: 'field-input-general-env',
                        }}
                    >
                        <MenuItem value="">
                            <em>Выберите значение...</em>
                        </MenuItem>
                        <MenuItem value={1}>Центр города</MenuItem>
                        <MenuItem value={2}>Деловой район (не центр)</MenuItem>
                        <MenuItem value={3}>Спальный район</MenuItem>
                        <MenuItem value={4}>Сельская местность</MenuItem>
                    </Select>
                </FormControl>
            </div>
            // </form>
        );
    }
}

InputFieldRegionEnv.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputFieldRegionEnv);
