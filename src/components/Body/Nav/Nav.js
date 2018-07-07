import React, { Component } from "react";
import logo from "../../../images/logo.png";
import "./Nav.css";
import Menu from "./Menu/Menu";
import Contact from "./Contact/Contact";

class Nav extends Component {
  render() {
    console.log(this.props);
    return (
      <nav className="nav">
        <Menu overlayToggle={this.props.overlayToggle} />
        <img src={logo} className="logo" alt="logo for Joseph Kerkhof" />
        <Contact />
      </nav>
    );
  }
}

export default Nav;
