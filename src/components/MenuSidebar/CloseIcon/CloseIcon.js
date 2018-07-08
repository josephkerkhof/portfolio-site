import React, { Component } from "react";
import "./CloseIcon.css";

class CloseIcon extends Component {
  render() {
    return (
      <div className="close-icon-wrapper">
        <div className="close-icon" onClick={this.props.overlayToggle}>
          <div className="close-icon-line" />
          <div className="close-icon-line" />
        </div>
      </div>
    );
  }
}

export default CloseIcon;
