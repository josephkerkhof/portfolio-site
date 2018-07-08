import React, { Component } from "react";
import "./MenuSidebar.css";

class MenuSidebar extends Component {
  render() {
    return (
      <div className="menu-sidebar-wrapper">
        <div className="close-icon-wrapper">
          <div className="close-icon">
            <div className="close-icon-line" />
            <div className="close-icon-line" />
          </div>
        </div>
        <ul>
          <li>Home</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default MenuSidebar;
