import React, { Component } from "react";
import "./Modal.css";
import Overlay from "../../../../Overlay/Overlay";

class Modal extends Component {
  render() {
    if (this.props.show) {
      return (
        <div className="modal-wrapper">
          <img
            src={this.props.imgSrc}
            alt={this.props.imgAlt}
            className="modal-img"
          />
          <Overlay show={this.props.show} menuToggle={this.props.modalToggle} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
