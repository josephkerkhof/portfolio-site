import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Menu from "./Menu.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <Menu />
          <img src={logo} className="App-logo" alt="logo for Joseph Kerkhof" />
        </nav>
        <main className="App-main">here is some junk text</main>
      </div>
    );
  }
}

export default App;
