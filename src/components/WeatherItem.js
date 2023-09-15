import React from "react";
import clear from "../img/weather-icons/clear.svg";
import "./../App.css";

// import data from "../fakeWeatherData.json";


function CurrentWeather({showData}) {

  // console.log(showData)
  console.log(showData.list);

  return (
    <section className="nowWeather">

      <img className="nowImg" src={clear} alt="weatherImag"/>

      <div id="weatherNowTitle">{showData.list[0].weather[0].description}</div>
      <p className="para"><span className="weatherTemp">Temperature</span> {Math.round(showData.list[0].main.temp_min)} &deg;C to {Math.round(showData.list[0].main.temp_max)} &deg;C </p>

      <p className="para2">
        <span className="a">Humidity </span>{showData.list[0].main.humidity}%<span></span><span className="a">Pressure </span><span> {showData.list[0].main.pressure}</span>
      </p>

    </section>

  )

}




function WeatherItem({showData}) {

  const getData=showData.list.slice(1,7);

  return (

    <section className="dayweather">

      {getData.map((e) => {
        let hours= e.dt_txt.split(" ")
        return (
          <article className="timedetail">
            <p className="time">{hours[1].slice(0,5)}</p>
            <img className="wImg" src={clear} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
            <span className="temp">{Math.round(e.main.temp)}&deg;C </span>
          </article>
        )
      })}

    </section>
  )
}


export { CurrentWeather, WeatherItem }




