import React from "react";
import AppWrapper from "./utils/AppWrapper";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Appointments from "./components/layouts/Appointments";
import Overlay from "./components/Overlay";
import { Fab } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
  margin: 0,
  top: "auto",
  right: 40,
  bottom: 40,
  left: "auto",
  position: "fixed",
  zIndex: "100000"
};

function App() {
  return (
    <AppWrapper>
      <Overlay />
      <Fab
        style={style}
        color="primary"
        onClick={() => {
          window.scrollTo(0, document.documentElement.offsetHeight);
        }}
      >
        <FontAwesomeIcon icon="plus" size="lg" />
      </Fab>
      <div className="App">
        <Header />
        <Appointments />
        <Footer />
      </div>
    </AppWrapper>
  );
}

export default App;
