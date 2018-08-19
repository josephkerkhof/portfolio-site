import React, { Component } from "react";
import "./Home.css";
import Helmet from "react-helmet";
import profileImage from "../../../../images/joseph-profile.jpg";

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <Helmet>
          <title>Joseph Kerkhof - Home</title>
          <meta
            name="Description"
            content="A portfolio for the full stack web developer Joseph Kerkhof. Joseph is passionate about developing quality products at has experience writing good code that works at scale."
          />
        </Helmet>
        <h1 className="greeting">
          Hi{" "}
          <span role="img" aria-label="light skinned waving hand emoji">
            👋🏻
          </span>
          ,
        </h1>
        <img
          src={profileImage}
          alt="Joseph wearing a hunting coat and blue baseball hat is smiling at camera in the woods"
          className="profile-image"
        />
        <p>
          Nice to meet you! I'm a full stack web developer with a motivation to
          develop great products. With an eye for detail, I've proven the
          ability to write quality code that works at scale. I have a passion
          for innovating creative solutions to difficult tasks. I spend my free
          time learning new technologies to apply to my profession, and
          traveling with my lovely wife.
        </p>
        <p>
          Currently, I’m a Web Application Developer from the University of
          Wisconsin – Oshkosh. I earned my Undergraduate degree from{" "}
          <abbr title="University of Wisconsin – Oshkosh">UW-Oshkosh</abbr> in
          Computer Science in 2016. Now I'm pursuing a Master’s degree in Data
          Science from{" "}
          <abbr title="University of Wisconsin - Extension">UW-Extension</abbr>.
        </p>
        <p>
          <a
            target="_blank"
            without
            rel="noopener noreferrer"
            href="mailto:joseph.kerkhof@outlook.com"
          >
            Reach out
          </a>{" "}
          to me to see how I can help you and your organization!
        </p>
      </div>
    );
  }
}

export default Home;
