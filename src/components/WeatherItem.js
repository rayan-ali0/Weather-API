import React from "react";
// import { render } from "react-dom";
import clear from "../img/weather-icons/clear.svg";
import "./../App.css" ;


function CurrentWeather(){
  return(
           <section class="nowWeather">
            <img className="nowImg" src={clear} alt="weatherImag" />
            <div id="weatherNowTitle">Cloudy</div>
            <p className="para"><span className="weatherTemp">Temperature</span>  10&deg;C to 11&deg;C </p>

            <p className="para2">
              <span className="a">Humidity </span><span>28%</span><span className="a">Pressure </span>1<span>00.9</span>
            </p>

          </section>

  )
}


function WeatherItem(){
  return(
    
 <section class="dayweather">
            <article class="timedetail">
              <time class="time" datetime="hh:mm">3:00</time>
              <img class="wImg" src={clear} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">8&deg;C </span>

            </article>
            <article class="timedetail">
              <time class="time" datetime="hh:mm">6:00</time>
              <img class="wImg" src={clear} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">9&deg;C </span>

            </article>
            <article class="timedetail">
              <time class="time" datetime="hh:mm">9:00</time>
              <img class="wImg" src={clear} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">14&deg;C </span>

            </article>
            <article class="timedetail">
              <time class="time" datetime="hh:mm">12:00</time>
              <img class="wImg" src={clear} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">17&deg;C </span>

            </article>
            <article class="timedetail">
              <time class="time" datetime="hh:mm">15:00</time>
              <img class="wImg" src={clear} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">18&deg;C </span>

            </article>
            <article class="timedetail">
              <time class="time" datetime="hh:mm">18:00</time>
              <img class="wImg" src={clear} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">16&deg;C </span>

            </article>
            <article class="timedetail">
              <time class="time" datetime="hh:mm">21:00</time>
              <img class="wImg" src={clear} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">13&deg;C </span>

            </article>


          </section>
  )
}


export {CurrentWeather,WeatherItem}



// export default class WeatherItem extends Component {
//   render() {
//     return <div>Heello</div>;
//   }
// }
// export class SayHello extends Component {
//   render() {
//     return (
//       <div style={{ color: this.props.color, backgroundColor: "yellow" }}>
//         Hello {this.props.name}
//       </div>
//     );
//   }
// }
