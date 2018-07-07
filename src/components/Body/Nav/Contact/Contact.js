import React, { Component } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  render() {
    return (
      <a href="mailto:joseph.kerkhof@gmail.com" className="contact-wrapper">
        <div className="centerer">
          <FontAwesomeIcon
            icon={faPaperPlane}
            size="lg"
            className="plane-icon"
          />
          <div className="contact-me">Contact</div>
        </div>
      </a>
    );
  }
}

export default Contact;
