import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./Content.css";
import Home from "./Home/Home";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";
import NotFound from "./NotFound/NotFound";

class Content extends Component {
  render() {
    return (
      <main className="content-wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default Content;
