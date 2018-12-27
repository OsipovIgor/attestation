import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons"
import ModalConfirm from "./ModalConfirm";
import Notifications from "./Notifications";
import ConfirmService from "../Services/ConfirmService";
import NotificationService from "../Services/NotificationService";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Прекрасная аттестация
          </Typography>
        </Toolbar>
      </AppBar>
      <ContentWrapper>
        {children}
        <ModalConfirm ref={ConfirmService.init} />
        <Notifications ref={NotificationService.init} />
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  content: "";
  background-color: rgba(245, 248, 245, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  margin-top: 64px;
  padding: 24px;
  width: 100%;
`;


