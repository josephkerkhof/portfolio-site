import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-page-wrapper">
        {" "}
        <h1>Contact</h1>
        <div>
          I am available for contact on a number of platforms. Listed in order
          of preference.
          <ul>
            <li>
              <a
                href="mailto:joseph.kerkhof@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/josephkerkhof"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/musicaljoeker"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/musicaljoeker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;
