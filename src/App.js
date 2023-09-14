import React from "react";
import Search from "./components/Search";

import { CurrentWeather, WeatherItem } from "./components/WeatherItem"

// import "./App.css";


function App() {
  return (
    <div className="app">
      
      <Search/>
      <div className="main">
      <CurrentWeather/>
      <WeatherItem/>
      </div>
      </div>

  )
}

export default App;
