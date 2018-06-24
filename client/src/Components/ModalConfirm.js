import React from "react";
import styled from "styled-components";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";


class ModalConfirm extends React.Component {
  state = {
    open: false,
    question: "",
    title: "",
    action: null
  };

  show = ({ title, question, action}) => {
    this.setState({ open: true, title, question, action });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onAccept = () => {
    this.state.action();
    this.handleClose();
  };

  render() {
    const { question, title } = this.state;

    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {question}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Нет
          </Button>
          <Button onClick={this.onAccept} color="primary" autoFocus>
            Да
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ModalConfirm;