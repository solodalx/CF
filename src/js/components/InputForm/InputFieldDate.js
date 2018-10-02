import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import BigTip from "../common/BigTip";

const styles = theme => ({
    // container: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    // },
    // textField: {
    //     marginLeft: theme.spacing.unit,
    //     marginRight: theme.spacing.unit,
    //     width: 200,
    // },
    inputLabel: {
        color: 'purple',
    },
    invisible: {
        display: 'none',
    },
    visible: {
    },
});


class InputFieldDate extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            //<form className={classes.container} noValidate>
            <div>
                <Tooltip title={this.props.tip} placement="center">
                    <TextField
                        id={this.props.id}
                        label={this.props.label}
                        type="date"
                        // defaultValue="2018-07-02"
                        defaultValue={this.props.defaultValue}
                        helperText={this.props.helperText}
                        //className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                            className: classes.inputLabel
                        }}
                    />
                </Tooltip>
                <span className={(this.props.bigTip == undefined) ? classes.invisible : classes.visible}>
                    <BigTip id={this.props.id}/>
                </span>
            </div>
            // </form>
        );
    }
}

InputFieldDate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputFieldDate);




