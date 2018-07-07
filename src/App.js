import React, { Component } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
