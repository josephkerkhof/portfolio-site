import React, { Component } from "react";
import "./MenuSidebar.css";
import CloseIcon from "./CloseIcon/CloseIcon";
import { Link } from "react-router-dom";

class MenuSidebar extends Component {
  render() {
    if (this.props.show) {
      return (
        <div className="menu-sidebar-wrapper">
          <CloseIcon menuToggle={this.props.menuToggle} />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
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
