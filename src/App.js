import React,{useEffect, useState} from "react";
import Search from "./components/Search";

import { CurrentWeather, WeatherItem } from "./components/WeatherItem"

// import "./App.css";


function App() {

  const [inputValue, setInputValue] = useState('');
  const [showData,setShowData]=useState({});

  const API_KEY="cdfb65113fb057b18f303ca798a79c86";


  // const url=`http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&cnt=8&units=metric&appid=${API_KEY}`;


  // const handleSearch=()=>{
  //   console.log(url);
  // }

  const handleSearch = () => {
    // Construct the API URL with the current inputValue and API_KEY
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&cnt=8&units=metric&appid=${API_KEY}`;

    // Use the fetch API to make a GET request to the constructed URL
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((showData) => {
        // Update the getData state with the fetched weather data
        setShowData(showData);
        
        console.log(showData);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        // Handle the error as needed
      });
  };

  useEffect(()=>{
    
  },[])



  // Callback function to receive input value from the child
  const handleInputValueChange = (value) => {
    setInputValue(value);
  };
  
  
  return (
    <div className="app">
      <Search onClick={handleSearch} onInputChange={handleInputValueChange}/>      

      <div className="main">

        
        {/* <div>
          {showData.list.map((e)=>{
            return(
              <p>{e.main.temp}</p>
            )
          })}
        </div> */}


      <CurrentWeather showData={showData}/>

      <WeatherItem/>

      
      </div>
      </div>

  )
}

export default App;
