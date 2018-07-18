import React, { Component } from "react";

class NotFound extends Component {
  componentDidMount() {
    document.title = "Joseph Kerkhof - Not Found";
  }
  render() {
    return (
      <div>
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
