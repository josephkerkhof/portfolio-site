import React, { Component } from "react";
import "./Menu.css";
import MenuIcon from "./MenuIcon/MenuIcon";

class Menu extends Component {
  render() {
    return (
      <div className="menu-wrapper">
        <div className="menu-centerer" onClick={this.props.overlayToggle}>
          <MenuIcon />
          <div className="menu-text">Menu</div>
        </div>
      </div>
    );
  }
}

export default Menu;
