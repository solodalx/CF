import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modelAction from '../../common/actions/modelAction';

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

import * as fields from "../../common/constants/fieldConstants";
import * as model from "../../common/model";

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
    state = {
        // val: '',
        // val: this.props.model.flAssetsEquipment,
        // val: (this.props.val) == undefined ? '' : this.props.val,
        // assetsLand: '',
        // assetsBuildings: '',
    };

    // constructor(props) {
    //     super(props);
    //     console.log('NEPLOG: InputFieldAmount: constructor: id = ' + props.id + ', model = ' + props.model);
    //     console.log(props.model);
    //     // console.log('NEPLOG: InputFieldAmount: constructor: flAssetsTotal = ' + props.model.flAssetsTotal);
    //     // this.setState({value: this.props.model.flAssetsTotal});
    //     // this.setState({val: props.model.flAssetsTotal});
    //     this.state.val = props.model.flAssetsTotal;
    // };

    // componentDidMount = (event) => {
    //     console.log('NEPLOG: InputFieldAmount: componentDidMount: id = ' + this.props.id + ', model = ' + this.props.model);
    //     console.log(this.props.model);
    //     // console.log('NEPLOG: InputFieldAmount: componentDidMount: flAssetsTotal = ' + this.props.model.flAssetsTotal);
    //     // this.setState({val: this.props.model.flAssetsEquipment});
    //     // this.setState({val: this.props.modelAction.getValueById(this.props.model, this.props.id)});
    //
    //     // console.log(model.getValueById(this.props.model, this.props.id));
    //     this.setState({val: model.getValueById(this.props.model, this.props.id)});
    // };

    handleChange = name => event => {
        // this.props.modelAction.fieldUpdated(this.props.model, this.props.id, event.target.value);
        // this.props.modelAction.fieldUpdated(this.props.blockName, this.props.fieldName, event.target.value);
        this.props.modelAction.fieldUpdated(this.props.field, event.target.value);
        // this.setState({ [name]: event.target.value });
    };

    // updateState = (blockName, fieldName, value) => {
    //     Object.assign({}, this.props.model, {[blockName]: Object.assign({}, this.props.model[blockName], {[fieldName]: value})});
    // };

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
                        // value={model.getValueById(this.props.model, this.props.id)}
                        value={this.props.value}
                        // value={model.getValue(this.props.modelState, this.props.blockName, this.props.fieldName)}
                        // value={(this.props.field == undefined || this.props.field == '') ? '' : model.getValue(this.props.modelState, this.props.field)}
                        // value={(this.props.value == undefined) ? model.getValue(this.props.modelState, this.props.field) : this.props.value}
                        // value={this.props.model.flAssetsTotal}
                        defaultValue={this.props.defaultValue}
                        helperText={this.props.helperText}
                        // onChange={this.handleChange('assetsLand')}
                        // onChange={this.handleChange('val')}
                        onChange={this.handleChange()}
                        // onChange={(value) => updateState(this.props.blockName, this.props.fieldName, value)}
                        // margin="normal"
                        InputProps={{
                            // endAdornment: <InputAdornment position="end">р.</InputAdornment>,
                            endAdornment:
                                <InputAdornment position="end"> {
                                        ((this.props.flType == undefined || this.props.flType == fields.FLTYPE_AMOUNT)
                                            && this.props.adornment == undefined) ?
                                            'p.' :
                                            this.props.adornment
                                    }
                                </InputAdornment>,
                            //className: classes.input
                            inputComponent:
                                (this.props.flType == undefined || this.props.flType == fields.FLTYPE_AMOUNT) ?
                                    NumberFormatCustom :
                                    ''
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

InputFieldAmount.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(InputFieldAmount);
// export default ComposedTextField;
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(InputFieldAmount));
