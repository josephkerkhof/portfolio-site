import React, { Component } from "react";
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
      <div className="App">
        <Body menuToggle={this.menuToggle} />
        <Footer />
        <Overlay show={this.state.menuVisible} />
        <MenuSidebar
          show={this.state.menuVisible}
          menuToggle={this.menuToggle}
        />
      </div>
    );
  }
}

export default App;
