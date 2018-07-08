import React, { Component } from "react";
import "./MenuSidebar.css";
import CloseIcon from "./CloseIcon/CloseIcon";

class MenuSidebar extends Component {
  render() {
    if (this.props.show) {
      return (
        <div className="menu-sidebar-wrapper">
          <CloseIcon menuToggle={this.props.menuToggle} />
          <nav>
            <ul>
              <li>Home</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MenuSidebar;
