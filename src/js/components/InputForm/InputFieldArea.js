import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as businessAreaAction from '../../common/actions/businessAreaAction';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as regionsAction from "../../common/actions/regionsAction";

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
            maxWidth: 350,
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            minWidth: 350,
        },
    },
    wrap: {
        // display: 'flex',
        // flexWrap: 'wrap',
        whiteSpace: 'pre-wrap',
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class InputFieldArea extends React.Component {
    state = {
        area: '',
        name: '',
    };

    componentDidMount = (event) => {
        this.props.businessAreaAction.getBusinessArea(event);
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
                    <InputLabel htmlFor="field-input-general-area">Направление деятельности</InputLabel>
                    <Select
                        value={this.state.area}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'area',
                            id: 'field-input-general-area',
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            this.props.businessArea.map(area => {
                                return <MenuItem className={classes.wrap} value={area.uuid}>{area.mainName + ' - ' + area.detailedName}</MenuItem>
                            })
                        }
                        {/*<MenuItem value={1}>Сельское хозяйство (мясное животноводство)</MenuItem>*/}
                        {/*<MenuItem value={2}>Торговля</MenuItem>*/}
                    </Select>
                </FormControl>
            </form>
        );
    }
}

function mapStateToProps(store) {
    return {
        businessArea: store.businessAreaState.businessArea,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        businessAreaAction: bindActionCreators(businessAreaAction, dispatch),
    }
}

InputFieldArea.propTypes = {
    classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(InputFieldArea);
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(InputFieldArea));


