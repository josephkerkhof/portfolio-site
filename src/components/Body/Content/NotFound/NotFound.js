import React, { Component } from "react";
import Helmet from "react-helmet";

class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Joseph Kerkhof - Not Found</title>
        </Helmet>
        <h1>
          Oops...<span role="img" aria-label="woman shrugging">
            🤷🏻
          </span>
        </h1>
        <p>
          Sorry, that page doesn't exist. Try <a href="/">going home</a> and
          starting again?
        </p>
      </div>
    );
  }
}

export default NotFound;
