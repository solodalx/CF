import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import * as modelAction from '../../common/actions/modelAction';
import * as model from "../../common/model";
import {IS_DEBUG} from '../../common/properties';

import CmnAppBar from '../common/CmnAppBar'


const theme = createMuiTheme({
    palette: {
        // primary: {main: green[400]}, // Purple and green play nicely together.
        primary: {main: '#558B2F'}, // Purple and green play nicely together.
        //primary: { main: purple[500] }, // Purple and green play nicely together.
        //secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
        // background: {
        //     default: '#FFC107',
        //     paper: '#FAFAFA',
        // },
    },
});

const styles = theme => ({
});

class OutputForm extends React.Component {
    state = {
    };

    render() {
        const { classes } = this.props;
        if (IS_DEBUG) {
            console.log('NEPLOG: OutputForm: render: modelState = ' + this.props.modelState);
            console.log(this.props.modelState);
        }

        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <CmnAppBar icon='back' title='Вернуться назад' iconLink='/input'/>
                </div>
            </MuiThemeProvider>
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

OutputForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(OutputForm));


