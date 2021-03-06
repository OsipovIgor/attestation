import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./Theme/theme";
import muiTheme from "./Theme/muiTheme";
import { JssProvider } from "react-jss";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import Layout from "./Components/Layout";

import AttestationContainer from "./Containers/Attestation";
import PlatformContainer from "./Containers/Platform";
import FeedbackContainer from "./Containers/Feedback";

createGlobalStyle`
  body {
    font-family: Roboto;
    background: #f7f7f7 !important;
  }
`;

// необходимо для перезаписи стилей mui через SC
// https://material-ui-next.com/customization/css-in-js/#css-injection-order
const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: 'jss-insertion-point',
});

const App = () => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>

        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={PlatformContainer} />
              <Route path="/platform/:id" component={AttestationContainer} />
              <Route path="/feedback" component={FeedbackContainer} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  </JssProvider>
);

export default App;
