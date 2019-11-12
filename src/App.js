import React from "react";
import AppWrapper from "./utils/AppWrapper";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Appointments from "./components/layouts/Appointments";
import Overlay from "./components/Overlay";

function App() {
  return (
    <AppWrapper>
      <Overlay />
      <div className="App">
        <Header />
        <Appointments />
        <Footer />
      </div>
    </AppWrapper>
  );
}

export default App;
