import React from "react";
import "./App.scss";
import ScrollToTop from "./ScrollToTopController";
import { BrowserRouter } from "react-router-dom";
import "./aos";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { blue, lightBlue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightBlue
  }
});

const AppWrapper = props => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollToTop>{props.children}</ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppWrapper;
