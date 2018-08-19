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
            href="mailto:joseph.kerkhof@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" color="#333333" />
          </a>
          <a
            href="https://www.linkedin.com/in/josephkerkhof"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" color="#333333" />
          </a>
          <a
            href="https://github.com/musicaljoeker"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" color="#333333" />
          </a>
          <a
            href="https://twitter.com/musicaljoeker"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" color="#333333" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
