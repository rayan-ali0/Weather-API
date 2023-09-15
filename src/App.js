import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import { CurrentWeather, WeatherItem } from "./components/WeatherItem"

function App() {

  const [inputValue, setInputValue] = useState("tripoli");
  const [showData, setShowData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = "cdfb65113fb057b18f303ca798a79c86";
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&cnt=8&units=metric&appid=${API_KEY}`;


  const handleSearch = async () => {
    // Construct the API URL with the current inputValue and API_KEY
    setIsLoading(true)

    // Use the fetch API to make a GET request to the constructed URL
    await fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((showData) => {
        // Update the getData state with the fetched weather data
        setShowData(showData);
        setIsLoading(false)
        // console.log(showData);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        // Handle the error as needed
        setIsLoading(false)
      });
  };

  useEffect(() => {
    if (setIsLoading) {
      handleSearch();
    }
  }, [])

  // Callback function to receive input value from the child
  const handleInputValueChange = (value) => {
    setInputValue(value);
  };


  return (
    <div className="app">
      <Search onClick={handleSearch} onInputChange={handleInputValueChange} />

      {showData && !isLoading ? (
        <div className="main">
          <CurrentWeather showData={showData} />
          <WeatherItem showData={showData} />

        </div>
      ) : <></>
      }
    </div>

  )
}

export default App;
