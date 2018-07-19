import React, { Component } from "react";
import "./Modal.css";
import Overlay from "../../../../Overlay/Overlay";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomedIn: false
    };
    this.zoomToggle = this.zoomToggle.bind(this);
  }

  zoomToggle(e) {
    e.stopPropagation();
    if (this.state.zoomedIn) {
      this.setState({ zoomedIn: false });
    } else {
      this.setState({ zoomedIn: true });
    }
  }

  render() {
    if (this.props.show) {
      return (
        <div className="modal-wrapper">
          <div className="modal-img-wrapper" onClick={this.props.modalToggle}>
            <img
              src={this.props.imgSrc}
              alt={this.props.imgAlt}
              className={
                "modal-img " + (this.state.zoomedIn ? "zoomedIn" : "zoomedOut")
              }
              onClick={this.zoomToggle}
            />
          </div>
          <Overlay show={this.props.show} menuToggle={this.props.modalToggle} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
