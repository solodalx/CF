import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    // root: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    // },
    formControl: {
        margin: theme.spacing.unit,
        // minWidth: 200,
        // minWidth: 350,
        [theme.breakpoints.down('xs')]: {
            minWidth: 150,
            maxWidth: 350,
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            minWidth: 350,
        },
    },
    marginZero: {
        marginLeft: 0,
    },
    // selectEmpty: {
    //     marginTop: theme.spacing.unit * 2,
    // },
});

class InputFieldStride extends React.Component {
    state = {
        fieldValue: '',
        name: '',
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {classes} = this.props;

        return (
            //<form className={classes.root} autoComplete="off">
            <div>
                <div className={[classes.formControl, classes.marginZero].join(' ')}>
                    {/*<br/>*/}
                    <br/>
                    Какая детализация формируемых отчетов необходима?
                </div>
                {/*<Tooltip title='Период планирования в отчетах - 60 месяцев' placement="top">*/}
                    {/*<div>*/}
                        {/*<Tooltip title='Какая детализация формируемых отчетов необходима?' placement="center">*/}
                            <FormControl className={[classes.formControl, classes.marginZero].join(' ')}>
                                <InputLabel htmlFor="field-input-general-env">Шаг планирования</InputLabel>
                                <Select
                                    value={this.state.fieldValue}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'fieldValue',
                                        id: 'field-input-general-stride',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>Выберите значение...</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Месяц</MenuItem>
                                    <MenuItem value={2}>Квартал</MenuItem>
                                    <MenuItem value={3}>Год</MenuItem>
                                </Select>
                            </FormControl>
                        {/*</Tooltip>*/}
                    {/*</div>*/}
                {/*</Tooltip>*/}
            </div>
            // </form>
        );
    }
}

InputFieldStride.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputFieldStride);
