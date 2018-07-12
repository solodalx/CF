import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as environmentAction from '../common/actions/environmentAction';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as businessAreaAction from "../common/actions/businessAreaAction";

const styles = theme => ({
    // root: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    // },
    formControl: {
        // margin: theme.spacing.unit,
        // minWidth: 200,
        // minWidth: 350,
        // minWidth: '100%',
        // width: '100%',
        [theme.breakpoints.down('xs')]: {
            minWidth: 150,
            // maxWidth: 350,
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

    componentDidMount = (event) => {
        this.props.environmentAction.getEnvironment(event);
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
                        {
                            this.props.environment.map(env => {
                                return <MenuItem value={env.uuid}>{env.name}</MenuItem>
                            })
                        }
                        {/*<MenuItem value={1}>Центр города</MenuItem>*/}
                        {/*<MenuItem value={2}>Деловой район (не центр)</MenuItem>*/}
                        {/*<MenuItem value={3}>Спальный район</MenuItem>*/}
                        {/*<MenuItem value={4}>Сельская местность</MenuItem>*/}
                    </Select>
                </FormControl>
            </div>
            // </form>
        );
    }
}

function mapStateToProps(store) {
    return {
        environment: store.environmentState.environment,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        environmentAction: bindActionCreators(environmentAction, dispatch),
    }
}

InputFieldRegionEnv.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(InputFieldRegionEnv);
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(InputFieldRegionEnv));
