import React, { Component } from "react";
import Nav from "./Nav/Nav";
import "./Body.css";

class Body extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Nav />
        <div className="content-wrapper">
          <h1 className="greeting">
            Hi{" "}
            <span role="img" aria-label="light skinned waving hand emoji">
              👋🏻
            </span>
            ,
          </h1>
          <div className="content">
            <p>
              Nice to meet you! I’m a Web Application Developer from the
              University of Wisconsin – Oshkosh. I earned my Undergraduate
              degree from University of Wisconsin – Oshkosh in Computer Science
              in 2016 and currently pursuing a Master’s degree in Data Science
              from University of Wisconsin - Extension.
            </p>
            <p>
              I was drawn to computing at a young age and after taking a web
              design course in high school, I discovered my love for
              programming. During my internship as a Web Application Developer
              in college I realized the "cool" factor of Data Science, what
              could be done with it, and the useful applications it can provide
              businesses. I take immense pride in my work as a developer and try
              to do everything to the best of my ability. As the scope of
              technology changes rapidly, it is critical to design and build
              applications thoughtfully to keep usefulness at maximum and risk
              to minimum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
