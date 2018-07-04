import React, { Component } from "react";
import "./Footer.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

// Add FontAwesome Icons to Library
library.add(faCopyright, faEnvelope, faLinkedin, faGithub, faTwitter);

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="copywright">
          <FontAwesomeIcon icon={faCopyright} /> Joseph Kerkhof
        </div>
        <div className="social">
          <a href="mailto:joseph.kerkhof@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.linkedin.com/in/josephkerkhof">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/musicaljoeker">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com/musicaljoeker">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
