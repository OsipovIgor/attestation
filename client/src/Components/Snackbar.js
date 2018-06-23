import React from "react";
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

export default class SnackBar extends React.Component {
    state = {
        open: false,
        message: null
    }

    showMessage = (message) => {
        this.setState(()=>({open: true, message}))
    }

    handleClose = (event, reason) => {
        debugger;
        if (reason === 'clickaway') {
        return;
        }

        this.setState({ open: false });
    };

    render() {
        const { open, message, autoHide = 2000 } = this.state;
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={autoHide}
                SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{message}</span>}
                onClose={this.handleClose}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={this.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        );
    }
}