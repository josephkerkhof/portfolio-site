import React, { Component } from "react";
import "./Modal.css";
import Overlay from "../../../../Overlay/Overlay";

class Modal extends Component {
  render() {
    return (
      <div>
        <Overlay show={this.props.show} menuToggle={this.props.modalToggle} />
      </div>
    );
  }
}

export default Modal;
