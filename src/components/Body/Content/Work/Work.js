import React, { Component } from "react";
import "./Work.css";
import uwoshAdmissions from "./images/admissions.jpg";
import uwoshEngage from "./images/engage.jpg";
import uwoshHome from "./images/uwosh.edu.jpg";
import gemification from "./images/gemification.jpg";
import portalV2 from "./images/portalV2.jpg";
import uwoshDirectory from "./images/uwosh.edu_directory.jpg";
import virtualTour from "./images/virtualtour.jpg";
import gravityFormsAuditor from "./images/gravity-forms-auditor.jpg";
import farmAndFleetBlog from "./images/farmandfleetblog.jpg";

class Work extends Component {
  render() {
    return (
      <div>
        <h1>Work</h1>
        <p>
          I've worked for two organizations as a web developer:{" "}
          <a
            href="https://www.portalmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portal Media
          </a>{" "}
          and{" "}
          <a href="https://uwosh.edu" target="_blank" rel="noopener noreferrer">
            <abbr title="University of Wisconsin - Oshkosh">UW-Oshkosh</abbr>
          </a>.
        </p>
        <h4>
          Work at{" "}
          <abbr title="University of Wisconsin - Oshkosh">UW-Oshkosh</abbr>
        </h4>
        <hr />
        <div className="work-items">
          <div className="crop uwo-theme-image-1">
            <img
              src={uwoshHome}
              alt="University of Wisconsin - Oshkosh Admissions home page"
            />
          </div>
          <div className="crop uwo-theme-image-2">
            <img
              src={uwoshAdmissions}
              alt="University of Wisconsin - Oshkosh Admissions home page"
            />
          </div>
          <div className="uwo-theme-description">
            These are examples of the{" "}
            <a
              href="https://github.com/uwosh/uw-oshkosh-divi"
              target="_blank"
              rel="noopener noreferrer"
            >
              WordPress theme
            </a>{" "}
            I maintained at{" "}
            <abbr title="University of Wisconsin - Oshkosh">UW-Oshkosh</abbr>.
            This theme was used on almost every site on the{" "}
            <abbr title="University of Wisconsin - Oshkosh">UWO</abbr> campus.
            Examples here include our{" "}
            <a
              href="https://uwosh.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <abbr title="University of Wisconsin - Oshkosh">UWO</abbr> home
              page
            </a>{" "}
            and{" "}
            <a
              href="https://uwosh.edu/admissions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admissions home page
            </a>.
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
