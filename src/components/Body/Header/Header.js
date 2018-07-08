import React, { Component } from "react";
import logo from "../../../images/logo.png";
import "./Header.css";
import Menu from "./Menu/Menu";
import Contact from "./Contact/Contact";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Menu menuToggle={this.props.menuToggle} />
        <img src={logo} className="logo" alt="logo for Joseph Kerkhof" />
        <Contact />
      </header>
    );
  }
}

export default Header;
