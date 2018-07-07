import React, { Component } from "react";
import "./Overlay.css";

class Overlay extends Component {
  render() {
    if (this.props.show) {
      return <div className="overlay" />;
    } else {
      return null;
    }
  }
}

export default Overlay;
