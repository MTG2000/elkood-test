import React from "react";
import "./App.scss";
import ScrollToTop from "./ScrollToTopController";
import { BrowserRouter } from "react-router-dom";
import "./aos";

const AppWrapper = props => {
  return (
    <BrowserRouter>
      <ScrollToTop>{props.children}</ScrollToTop>
    </BrowserRouter>
  );
};

export default AppWrapper;
