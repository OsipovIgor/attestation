import React from "react";
import styled from "styled-components";
import { Snackbar, IconButton, Avatar as MUIAvatar } from "@material-ui/core";
import {
  Close as CloseIcon,
  Check as SuccessIcon,
  Warning as WarningIcon,
  Highlight as InfoIcon,

} from "@material-ui/icons";
import guid from "uuid/v4";

export default class SnackBar extends React.Component {
  state = {
    notifications: []
  };

  hideMessage = id =>
    this.setState(state => ({
      notifications: state.notifications.filter(item => item.id !== id)
    }));

  hideAllMesages = () => this.setState({ notifications: [] });

  showMessage = ({
    message,
    type = "default",
    autoHideDuration = 3000,
    actions,
    fixed = false,
    id
  }) => {
    // уникальный ключ для нотификейшна
    const key = guid();
    // в массиве может содержаться нотификейшн только с уникальным id
    if (
      !this.state.notifications.find(
        notification => notification.id && notification.id === id
      )
    ) {
      this.setState(state => ({
        notifications: [
          ...state.notifications,
          {
            message,
            type,
            autoHideDuration,
            actions,
            fixed,
            id,
            key
          }
        ]
      }));
    }
  };

  handleClose = key => (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState(state => ({
      notifications: state.notifications.filter(item => item.key !== key)
    }));
  };

  renderContent = ({ message, type, actions, fixed, key }) => {
    return (
      <NotificationWrapper>
        {type &&
          type !== "default" && (
            <NotificationIcon type={type}>
              <Avatar>
                {type === "success" && <SuccessIcon />}
                {type === "info" && <InfoIcon />}
                {type === "error" && <CloseIcon />}
                {type === "warning" && <WarningIcon />}
              </Avatar>
            </NotificationIcon>
          )}
        <NotificationContent>
          {message}
          {fixed || (
            <CloseButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose(key)}
            >
              <CloseIcon />
            </CloseButton>
          )}
          {actions && <Actions>{actions}</Actions>}
        </NotificationContent>
      </NotificationWrapper>
    );
  };

  render() {
    const { notifications } = this.state;
    return (
      <NotificationsWrapper className="notifications-wrapper">
        {notifications.map(notification => (
          <Notification
            key={notification.key}
            type={notification.type}
            open={true}
            message={this.renderContent(notification)}
            onClose={this.handleClose(notification.key)}
            autoHideDuration={
              notification.fixed ? null : notification.autoHideDuration
            }
          />
        ))}
      </NotificationsWrapper>
    );
  }
}

const NotificationsWrapper = styled.div`
  position: fixed;
  z-index: 10;
  right: 44px;
  bottom: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > div {
    display: fit-content;
    margin-bottom: 20px;
    transition: all 0.3s;
  }
`;

const NotificationContent = styled.div`
  display: block;
  color: #222222;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 32px;

  svg {
    opacity: 0.7;
    color: ${p => p.theme.palette.lightTextColor}
    transition: 0.3s all;
  }

  &:hover {
    svg {
      opacity: 1;
      transform: rotate(180deg);
      transition: 0.3s all;
    }
  }
`;

const statusColor = {
  info: "#0077C6",
  error: "#f44d4c",
  success: "#42941A",
  warning: "#fe8c30",
  default: "transparent"
};

const Notification = styled(Snackbar)`
  position: initial;
  bottom: 0;
  right: 0;
  display: block;
  transition: all 0.3s;
  transform: none !important;

  > div:first-child {
    min-height: 60px;
    padding: 20px;
    background: #fff;
    flex: 1;
    color: ${p => p.theme.palette.darkTextColor};

    > div:first-child {
      padding: 0;
      flex: 1;

      > div:first-child {
        flex: 1;
      }
    }
  }

  div[class*="NotificationContent"] {
    flex: 1;
  }
`;

const NotificationWrapper = styled.div`
  display: flex;
  align-items: center;

  > div:not(:first-child) {
    flex: 1;
  }
`;

const Avatar = styled(MUIAvatar)``;

const NotificationIcon = styled.div`
  display: flex;
  margin-right: 20px;

  ${Avatar} {
    background: ${p => statusColor[p.type]};

    svg {
      color: #fff;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
