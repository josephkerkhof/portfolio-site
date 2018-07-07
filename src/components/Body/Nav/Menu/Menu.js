import React, { Component } from "react";
import "./Menu.css";
import MenuIcon from "./MenuIcon/MenuIcon";

class Menu extends Component {
  render() {
    function menuClick(e) {
      console.log("menu was clicked!");
    }

    return (
      <div className="menu-wrapper">
        <div className="menu-centerer" onClick={menuClick}>
          <MenuIcon />
          <div className="menu-text">Menu</div>
        </div>
      </div>
    );
  }
}

export default Menu;
