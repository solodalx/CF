/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modelAction from '../../common/actions/modelAction';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

import Tooltip from '@material-ui/core/Tooltip';
import {IS_DEBUG} from '../../common/properties';

const styles = theme => ({
    root: {
        flexGrow: 1,
        // height: 250,
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    valueContainer: {
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
    },
    noOptionsMessage: {
        fontSize: 16,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
    inputWidth: {
        [theme.breakpoints.down('xs')]: {
            minWidth: 150,
            maxWidth: 350,
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            minWidth: 350,
            width: 350,
            maxWidth: 350,
        },
    },
    purple: {
        color: 'purple',
    },
});

function NoOptionsMessage(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

function Control(props) {
    return (
        <TextField
            // fullWidth
            className={props.selectProps.classes.inputWidth}
            InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps.classes.input,
                    ref: props.innerRef,
                    children: props.children,
                    ...props.innerProps,
                },
            }}
        />
    );
}

function Option(props) {
    return (
        <MenuItem
            buttonRef={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
                whiteSpace: 'pre-wrap',
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

function Placeholder(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function SingleValue(props) {
    return (
        <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
            {props.children}
        </Typography>
    );
}

function ValueContainer(props) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
    // return <div className={[props.selectProps.classes.valueContainer, props.selectProps.classes.inputWidth].join(' ')}>{props.children}</div>;
}

function MultiValue(props) {
    return (
        <Chip
            // tabIndex={-1}
            label={props.children}
            className={classNames(props.selectProps.classes.chip, {
                [props.selectProps.classes.chipFocused]: props.isFocused,
            })}
            onDelete={event => {
                props.removeProps.onClick();
                props.removeProps.onMouseDown(event);
            }}
        />
    );
}

const components = {
    Option,
    Control,
    NoOptionsMessage,
    Placeholder,
    SingleValue,
    MultiValue,
    ValueContainer,
};

class InputFieldAutocomplete extends React.Component {
    state = {
        single: null,
        // multi: null,
        multi: this.props.value,
    };

    handleChange = name => value => {
        this.props.modelAction.fieldUpdated(this.props.field, value);
        this.setState({
            [name]: value,
        });
        if (IS_DEBUG) {
            console.log('NEPLOG: InputFieldAutocomplete: handleChange: name = ' + name + ', value = ' + value);
            console.log(value);
            console.log(this.props.value);
            console.log(this.props.modelState);
            console.log(this);
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            {/*<div className={[classes.root, classes.inputWidth].join(' ')}>*/}
                <Typography className={classes.purple}>
                    <br/>
                    {this.props.title}
                </Typography>
                <NoSsr>
                    {/*<Select*/}
                        {/*classes={classes}*/}
                        {/*options={suggestions}*/}
                        {/*components={components}*/}
                        {/*value={this.state.single}*/}
                        {/*onChange={this.handleChange('single')}*/}
                        {/*placeholder="Search a country (start with a)"*/}
                    {/*/>*/}
                    {/*<Tooltip title={this.props.tip} placement="center">*/}
                        <Select
                            classes={classes}
                            options={this.props.suggestions}
                            components={components}
                            value={this.state.multi}
                            onChange={this.handleChange('multi')}
                            // placeholder="Select multiple countries"
                            placeholder={this.props.placeholder}
                            isMulti={this.props.isMulti == undefined ? false : this.props.isMulti}
                            // menuPosition='fixed'
                            menuPosition='absolute'
                            // menuPosition={this.props.menuPosition}
                            // menuPlacement='auto'
                            maxMenuHeight={this.props.maxMenuHeight == undefined ? 200 : this.props.maxMenuHeight}
                        />
                    {/*</Tooltip>*/}
                </NoSsr>
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

InputFieldAutocomplete.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(InputFieldAutocomplete);
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(InputFieldAutocomplete));
