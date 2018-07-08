import React, { Component } from "react";
import "./MenuSidebar.css";
import CloseIcon from "./CloseIcon/CloseIcon";

class MenuSidebar extends Component {
  render() {
    return (
      <div className="menu-sidebar-wrapper">
        <CloseIcon overlayToggle={this.props.overlayToggle} />
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
