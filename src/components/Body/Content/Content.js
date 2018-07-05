import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Content.css";
import Home from "./Home/Home";
import Work from "./Work/Work";

class Content extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
        </div>
      </Router>
    );
  }
}

export default Content;
