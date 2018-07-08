import React, { Component } from "react";
import "./CloseIcon.css";

class CloseIcon extends Component {
  render() {
    return (
      <div className="close-icon-wrapper">
        <div className="close-icon-centerer" onClick={this.props.menuToggle}>
          <div className="close-icon">
            <div className="close-icon-line" />
            <div className="close-icon-line" />
          </div>
          <div className="close-menu-text">Close</div>
        </div>
      </div>
    );
  }
}

export default CloseIcon;
