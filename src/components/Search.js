import React from "react";
import "./Search.css";


function Search(){
  return(
    <div className="search">
        <header>
          <input type="text" name="city" id="city" placeholder="Type in a city name" />
          <input class="btn" type="submit" value="FIND WEATHER"></input>
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