import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
        // display: 'none',
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
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" href="#basic-tabs" />
                    </Tabs>
                </AppBar>
                <TabContainer>{getTabContent(value, this.props, this.state)}</TabContainer>
            </div>
        );
    }
}

InputFieldCalculator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputFieldCalculator);

function getTabContent(tab, props, state) {
    switch (tab) {
        case 0:
            return ('Item one');
        case 1:
            return ('Item two');
        case 2:
            return ('Item three');
    }
}
