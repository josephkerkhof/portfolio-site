import React, { Component } from "react";
import "./MenuSidebar.css";
import CloseIcon from "./CloseIcon/CloseIcon";
import { Link } from "react-router-dom";

class MenuSidebar extends Component {
  render() {
    // if (this.props.show) {
    return (
      <div
        className={
          "menu-sidebar-wrapper " + (this.props.show ? "active" : "disabled")
        }
      >
        <CloseIcon menuToggle={this.props.menuToggle} />
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={this.props.menuToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/work" onClick={this.props.menuToggle}>
                Work
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={this.props.menuToggle}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
    // } else {
    //   return null;
    // }
  }
}

export default MenuSidebar;
