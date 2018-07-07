import React, { Component } from "react";
import logo from "../../../images/logo.png";
import "./Nav.css";
import Menu from "./Menu/Menu";
import Contact from "./Contact/Contact";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <Menu />
        <img src={logo} className="App-logo" alt="logo for Joseph Kerkhof" />
        <Contact />
      </nav>
    );
  }
}

export default Nav;
