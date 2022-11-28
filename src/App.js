import './App.css';
import GeoMap from "./components/GeoMap";
import React from "react";

const props = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700]
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Map </h1>
        <div className="geoMap">
          <GeoMap />
        </div>
       
      </header>
    </div>
  );
}

export default App;
