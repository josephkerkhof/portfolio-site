import React, { Component } from "react";
import logo from "../../images/logo.png";
import Menu from "./Menu/Menu";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="App-nav">
        <Menu />
        <img src={logo} className="App-logo" alt="logo for Joseph Kerkhof" />
      </nav>
    );
  }
}

export default Nav;
