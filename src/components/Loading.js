import React from "react";
import loading from"../img/weather-icons/laoding.png"
// import "./../App.css";
function Loading(){
return(
    <section className="nowWeather">

    <img className="nowImg" src={loading} alt="weatherImag" />

    <h1> Loading ...</h1>

  </section>
)

}
export default Loading;