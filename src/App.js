import React, { Component } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Overlay from "./components/Overlay/Overlay";

class App extends Component {
  state = {
    overlayVisible: true
  };

  render() {
    return (
      <div className="App">
        <Body />
        <Footer />
        <Overlay show={this.state.overlayVisible} />
      </div>
    );
  }
}

export default App;
