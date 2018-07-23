import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modelAction from '../../common/actions/modelAction';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import * as fields from "../../common/constants/fieldConstants";
import InputFieldAmount from './InputFieldAmount.js'

import {IS_DEBUG} from '../../common/properties';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
    },
    invisible: {
        display: 'none',
    },
});

class InputFieldCalculator extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" classes={{root: classes.invisible}}>
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="1" />
                        <Tab label="2" />
                        <Tab label="3" />
                        {/*<Tab label="3" href="#basic-tabs" />*/}
                    </Tabs>
                </AppBar>
                <TabContainer>{getTabContent(value, this.props, this.state)}</TabContainer>
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

InputFieldCalculator.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(InputFieldCalculator);
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(InputFieldCalculator));


function getTabContent(tab, props, state) {
    switch (tab) {
        case 0:
            return (
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-sm-auto col-12">
                            {/*<InputFieldAmount id={fields.FL_CALC001.FL_AVERAGE_AMOUNT} label="Средняя сумма в чеке" tip=""/>*/}
                            <InputFieldAmount field='calculators:1:averageAmount' value={props.modelState.calculators["1"].averageAmount}  label="Средняя сумма в чеке" tip=""/>
                        </div>
                        <div className="col-sm-auto col-12">
                            {/*<InputFieldAmount id={fields.FL_CALC001.FL_CUSTOMER_NUMBER_PER_MONTH} label="Число покупателей" tip="Ожидаемый поток покупателей в месяц" flType={fields.FLTYPE_NUMBER} adornment="чел."/>*/}
                            <InputFieldAmount field='calculators:1:customerNumberPerMonth' value={props.modelState.calculators["1"].customerNumberPerMonth} label="Число покупателей" tip="Ожидаемый поток покупателей в месяц" flType={fields.FLTYPE_NUMBER} adornment="чел."/>
                        </div>
                    </div>
                </div>
                            );
        case 1:
            return ('2');
        case 2:
            return ('3');
    }
}
