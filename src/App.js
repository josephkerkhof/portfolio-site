import React, { Component } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Overlay from "./components/Overlay/Overlay";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body />
        <Footer />
        <Overlay />
      </div>
    );
  }
}

export default App;
