import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="menu-wrapper">
        <div className="centerer">
          <div className="menu-icon">
            <div className="menu-icon-line" />
            <div className="menu-icon-line" />
            <div className="menu-icon-line" />
          </div>
          <div class="menu-text">Menu</div>
        </div>
      </div>
    );
  }
}

export default Menu;
