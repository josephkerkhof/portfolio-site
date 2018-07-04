import React, { Component } from "react";
import logo from "./images/logo.png";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Body from "./components/Body/Body";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <Menu />
          <img src={logo} className="App-logo" alt="logo for Joseph Kerkhof" />
        </nav>
        <Body />
      </div>
    );
  }
}

export default App;
