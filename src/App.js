import React, { Component } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Overlay from "./components/Overlay/Overlay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayVisible: false
    };
    this.overlayToggleCallback = this.overlayToggleCallback.bind(this);
  }

  overlayToggleCallback() {
    console.log(this.state.overlayVisible);
    if (this.state.overlayVisible) {
      this.setState({ overlayVisible: false });
    } else {
      console.log("got a false");
      this.setState({ overlayVisible: true });
    }
  }

  render() {
    return (
      <div className="App">
        <Body overlayToggle={this.overlayToggleCallback} />
        <Footer />
        <Overlay show={this.state.overlayVisible} />
      </div>
    );
  }
}

export default App;
