import React from 'react';
import {Link} from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Cancel from '@material-ui/icons/Cancel';
import ArrowBack from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const styles = theme => ({
    noBorder: {
        '&:focus': {
            outline: 'none',
        },
    },
    iconWidth: {
        minWidth: 60,
        // maxWidth: 40,
        width: 60,
        paddingLeft: 0,
        paddingRight: 0,
    },
    paddingZero: {
        paddingLeft: 0,
    },
    colorPrimary: {
        color: 'white',
        '&:hover': {
            color: 'white',
        }
    },
})

class CmnAppBar extends React.Component {
    state = {
        auth: false,
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    getIcon = () => {
        switch(this.props.icon) {
            case 'cancel':
                return <Cancel/>;
            case 'back':
                return <ArrowBack/>;
        }
        return <Cancel/>;
    };

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <AppBar position="static" color="primary">
                <Toolbar>
                    <div class="contaner w-100">
                        <div class="row align-items-center justify-content-between flex-nowrap">
                            <div className={classes.iconWidth + " col-1 text-left"}>
                                <Tooltip title={this.props.title} placement="center">
                                    <IconButton className={classes.noBorder} color="inherit" aria-label="Menu">
                                        <Link to={this.props.iconLink} className={classes.colorPrimary}>
                                            {this.getIcon()}
                                        </Link>
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className={classes.paddingZero + " col text-left"}>
                                <Typography variant="title" color="inherit">
                                    Бизнес - стартер
                                </Typography>
                            </div>
                            <div className={classes.iconWidth + " col-1 text-right"}>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                    className={classes.noBorder}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Авторизация</MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

CmnAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CmnAppBar);
