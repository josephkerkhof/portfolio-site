import React, { Component } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  render() {
    return (
      <a href="mailto:joseph.kerkhof@gmail.com" className="contact-wrapper">
        <div className="contact-me">Contact Me!</div>
        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
      </a>
    );
  }
}

export default Contact;
