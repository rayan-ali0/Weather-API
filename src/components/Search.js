import React, {useState}from "react";
import "./Search.css";


function Search(props){

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    props.onInputChange(value);
  };

  // const handleInputChange = (event) => {
  //   setInput(event.target.value);
  // };


  return(
    <div className="search">
        <header>
          <input type="text" name="city" id="city" placeholder="Type in a city name" value={inputValue} onChange={handleInputChange} />
          <input class="btn" type="submit" value="FIND WEATHER" onClick={props.onClick}></input>
        </header>

    </div>
  )
}

export default Search;



// <div>
      //   {this.state.input}
      //   <input
      //     type="text"
      //     id="input-name"
      //     onChange={event => {
      //       this.setState({ input: event.target.value });
      //     }}
      //   />
      //   <button
      //     onClick={event => {
      //       this.props.handleInput(this.state.input);
      //     }}
      //   >
      //     Say Hello
      //   </button>
      // </div>