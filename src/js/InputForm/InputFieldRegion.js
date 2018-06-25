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
            // minWidth: '100%',
            minWidth: 150,
            maxWidth:350,
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            minWidth: 350,
        },
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class InputFieldRegion extends React.Component {
    state = {
        region: '',
        name: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            //<form className={classes.root} autoComplete="off">
            <form autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="field-input-general-region">Регион</InputLabel>
                    <Select
                        value={this.state.region}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'region',
                            id: 'field-input-general-region',
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={77}>Москва</MenuItem>
                        <MenuItem value={50}>Московская обл.</MenuItem>
                        <MenuItem value={22}>Алтайский край</MenuItem>
                        <MenuItem value={28}>Амурская область</MenuItem>
                        <MenuItem value={29}>Архангельская область</MenuItem>
                        <MenuItem value={30}>Астраханская область</MenuItem>
                        <MenuItem value={31}>Белгородская область</MenuItem>
                        <MenuItem value={32}>Брянская область</MenuItem>
                        <MenuItem value={33}>Владимирская область</MenuItem>
                        <MenuItem value={34}>Волгоградская область</MenuItem>
                        <MenuItem value={35}>Вологодская область</MenuItem>
                        <MenuItem value={36}>Воронежская область</MenuItem>
                        <MenuItem value={79}>Еврейская автономная область</MenuItem>
                        <MenuItem value={75}>Забайкальский край</MenuItem>
                        <MenuItem value={37}>Ивановская область</MenuItem>
                    </Select>
                </FormControl>
            </form>
        );
    }
}

InputFieldRegion.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputFieldRegion);
