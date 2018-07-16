import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Cancel from '@material-ui/icons/Cancel';
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
})

class InputAppBar extends React.Component {
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

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <AppBar position="static" color="primary">
                <Toolbar>
                    <div class="contaner w-100">
                        <div class="row align-items-center justify-content-between flex-nowrap">
                            {/*<div class="col-1 no-gutters">*/}
                            {/*<div class="col-auto text-left">*/}
                            <div className={classes.iconWidth + " col-1 text-left"}>
                                <Tooltip title='Вернуться назад' placement="center">
                                    <IconButton className={classes.noBorder} color="inherit" aria-label="Menu">
                                        <Cancel/>
                                    </IconButton>
                                </Tooltip>
                            </div>
                            {/*<div className="col-10 justify-content-start no-gutters">*/}
                            {/*<div className="col-10 text-left">*/}
                            <div className={classes.paddingZero + " col text-left"}>
                                {/*<Typography variant="title" color="inherit" className={classes.flex}>*/}
                                <Typography variant="title" color="inherit">
                                    {/*Ввод данных для расчета модели*/}
                                    {/*Независимая экспертиза проектов*/}
                                    Бизнес - стартер
                                    {/*НЭП*/}
                                </Typography>
                            </div>
                            {/*<div className="col-1">*/}
                                {/*<Button color="inherit">Login</Button>*/}
                            {/*</div>*/}
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
                                    {/*<MenuItem onClick={this.handleClose}>My account</MenuItem>*/}
                                </Menu>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

InputAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAppBar);
