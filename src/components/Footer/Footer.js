import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-wrapper">
        <div className="copywright">
          <FontAwesomeIcon icon={faCopyright} /> Joseph Kerkhof
        </div>
        <div className="social">
          <a
            href="mailto:joseph.kerkhof@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" color="#333333" />
          </a>
          <a
            href="https://www.linkedin.com/in/josephkerkhof"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" color="#333333" />
          </a>
          <a
            href="https://github.com/musicaljoeker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" color="#333333" />
          </a>
          <a
            href="https://twitter.com/musicaljoeker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" color="#333333" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
