import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
//       <div className="app">
// <h1> Hello , This is just for trying</h1>
//       </div>
<div>
  <header> This is my header</header>
  <main>This is my main</main>
</div>
    );
  }
}

export default App;
