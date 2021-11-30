import React from "react";
import ReactDOM from "react-dom";
import SearchCity from "./SearchCity";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchCity />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
