import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modelAction from '../../common/actions/modelAction';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    button: {
    }
});

class BigTip extends React.Component {
    state = {
        open: false,
    };

    handleOpen = scroll => () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleOpenClose = (expand) => (event) => {
        this.setState({open: expand});
        event.stopPropagation();
    };

    render() {
        const { classes } = this.props;

        return (
            <span>
                <IconButton
                    color='secondary'
                    // className={classes.button}
                    aria-label='info'
                    // tooltip='tooltip'
                    // tooltipPosition="bottom-right"
                    iconStyle={{width: '32px', height: '32px'}}
                    style={{width: '48px', height: '48x', padding: '0px'}}
                    // onClick={this.handleOpen('paper')}
                    onClick={this.handleOpenClose(true)}
                >
                    {/*<HelpIcon fontSize="small"/>*/}
                    <HelpIcon/>
                </IconButton>
               <Dialog
                   open={this.state.open}
                   // onClose={this.handleClose}
                   onClose={this.handleOpenClose(false)}
                   onClick={this.handleOpenClose(true)}
                   // scroll={this.state.scroll}
                   aria-labelledby="scroll-dialog-title"
               >
                    <DialogTitle id="scroll-dialog-title">Описание</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Инвестиции подразумевают капитальные вложения, например, приобретение зданий и оборудования для будущего проекта. Это сумма всех планируемых вами затрат на реализацию проекта.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            // onClick={this.handleClose}
                            onClick={this.handleOpenClose(false)}
                            color="primary"
                        >
                            Закрыть
                        </Button>
                    </DialogActions>
                </Dialog>
            </span>
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

BigTip.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(BigTip));
