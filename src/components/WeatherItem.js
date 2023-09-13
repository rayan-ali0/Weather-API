import React from "react";
// import { render } from "react-dom";


function CurrentWeather(){
  return(
    <div className="content">
      <h1>hello CurrentWeather</h1>
    </div>
  )
}


function WeatherItem(){
  return(
    <div>
      <h1>WeatherItem</h1>
    </div>
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
