import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Menu from "./Menu.js";
import Body from "./Body.js";

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
