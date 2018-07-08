import React, { Component } from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import "./Body.css";

class Body extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header menuToggle={this.props.menuToggle} />
        <Content />
      </div>
    );
  }
}

export default Body;
