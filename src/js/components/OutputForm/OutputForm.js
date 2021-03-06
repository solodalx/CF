import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import grey from "@material-ui/core/colors/grey";

import * as outputAction from '../../common/actions/outputAction';
import {IS_DEBUG} from '../../common/properties';

import CmnAppBar from '../common/CmnAppBar'
import OutputWidgetMain from './OutputWidgetMain'
import OutputWidgetProjectParams from './OutputWidgetProjectParams'
import OutputWidgetPnL from './OutputWidgetPnL'
import OutputWidgetCF from './OutputWidgetCF'
import OutputWidgetChart from './OutputWidgetChart'

const theme = createMuiTheme({
    palette: {
        // primary: {main: green[400]}, // Purple and green play nicely together.
        primary: {main: '#558B2F'}, // Purple and green play nicely together.
        //secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
        // background: {
        //     default: '#FFC107',
        //     paper: '#fab88f',
        // },
    },
});

const styles = theme => ({
    canvas: {
        backgroundColor: grey[400],
        padding: 0,
    },
    canvas2: {
        margin: 0,
        maxWidth: '100%',
    },
    canvasMargin: {
        margin: 20,
    },
    paddingZero: {
        padding: 0,
    },
    fullHeight: {
        height: '100%'
    },
    colPadding: {
        paddingLeft: '6px',
        paddingRight: '6px',
    },
});

class OutputForm extends React.Component {
    state = {
    };

    componentDidMount = (event) => {
        if (IS_DEBUG) {
            console.log('NEPLOG: OutputForm: componentDidMount: props = ' + this.props);
            console.log(this.props);
            console.log(this.state);
        }
    };

    render() {
        const { classes } = this.props;
        if (IS_DEBUG) {
            console.log('NEPLOG: OutputForm: render: outputState = ' + this.props.outputState);
            console.log(this.props.outputState);
        }

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.canvas}>
                    <CmnAppBar icon='back' title='Вернуться назад' iconLink='/input'/>
                    <div className={classes.canvas2 + ' container'}>
                        <div className='row'>
                            <div className={classes.paddingZero + ' col'}>
                                <div>
                                    <OutputWidgetMain/>
                                </div>
                            {/*</div>*/}
                            {/*<div className='col'>*/}
                                {/*<div>*/}
                                    {/*<OutputWidgetEfficiency/>*/}
                                {/*</div>*/}
                            </div>
                            <div className={classes.paddingZero + ' col'}>
                            {/*<div className='col'>*/}
                                <div className={classes.fullHeight}>
                                    <OutputWidgetProjectParams/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className={classes.paddingZero + ' col'}>
                                <div>
                                    <OutputWidgetPnL/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className={classes.paddingZero + ' col'}>
                                <div>
                                    <OutputWidgetCF/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className={classes.paddingZero + ' col'}>
                                <div>
                                    <OutputWidgetChart/>
                                </div>
                            </div>
                        </div>
                        {/*<div className='row'>*/}
                            {/*<div className={classes.paddingZero + ' col'}>*/}
                                {/*<div>*/}
                                    {/*<OutputWidgetChartFinFlow/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(store) {
    return {
        outputState: store.outputState,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        outputAction: bindActionCreators(outputAction, dispatch),
    }
}

OutputForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(OutputForm));
