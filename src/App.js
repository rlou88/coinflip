import React, { Component } from "react";
import CoinContainer from "./CoinContainer";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoinContainer />
      </div>
    );
  }
}

export default App;
