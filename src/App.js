import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Overlay from "./components/Overlay/Overlay";
import MenuSidebar from "./components/MenuSidebar/MenuSidebar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false
    };
    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    console.log(this.state.menuVisible);
    if (this.state.menuVisible) {
      this.setState({ menuVisible: false });
    } else {
      console.log("got a false");
      this.setState({ menuVisible: true });
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Body menuToggle={this.menuToggle} />
          <Footer />
          <Overlay show={this.state.menuVisible} />
          <MenuSidebar
            show={this.state.menuVisible}
            menuToggle={this.menuToggle}
          />
        </div>
      </Router>
    );
  }
}

export default App;
