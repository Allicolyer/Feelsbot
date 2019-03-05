import React, { Component } from 'react';
import '../styles/App.css';
import Map from './Map'
import {
  Button
} from 'rebass'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CityList />
        </header>
        <div id="map">
          <Map />
        </div>
      </div>
    );
  }
}

const CityButton = (props) => {
  return (
    <Button
      onClick={handleClick}
      color='white'
      bg='#282c34'
      mx={.5}>
      {props.name}
    </Button>
  )
};

const CityList = () => {
  return Object.keys(cities).map(city => <CityButton name= {city} />)
}

var handleClick = (e) =>{
  e.preventDefault();
  console.log(e.target.textContent);
}

const cities = {
  "New York":{
    "latitude":40.7127,
    "longitude": -74.0059,
    "miles": 12,
    "zoom": 11
  },
  "Philadelphia": {
    "latitude":39.9500,
    "longitude": -75.1667,
    "miles": 8,
    "zoom": 12
  },
  "Montreal": {
    "latitude":45.5017,
    "longitude": -73.5673,
    "miles": 10,
    "zoom": 11
  },
  "Miami": {
    "latitude":25.7753,
    "longitude": -80.2089,
    "miles": 10,
    "zoom": 11
  },
  "Honolulu": {
    "latitude":21.3000,
    "longitude": -157.8167,
    "miles": 6,
    "zoom": 13
  },
  "Los Angeles":{
    "latitude":34.0500,
    "longitude": -118.2500,
    "miles": 18,
    "zoom": 11
  },
  "San Francisco": {
    "latitude":37.7833,
    "longitude": -122.4167,
    "miles": 10,
    "zoom": 11
  },
  "Portland": {
    "latitude":45.5200,
    "longitude": -122.6819,
    "miles": 10,
    "zoom": 11
  },
  "Denver": {
    "latitude":39.7392,
    "longitude": -104.9903,
    "miles": 8,
    "zoom": 12
  },
  "Vancouver": {
    "latitude":49.2827,
    "longitude": -123.1207,
    "miles": 10,
    "zoom": 11
  },
  "London": {
    "latitude":51.5072,
    "longitude": -0.1275,
    "miles": 10,
    "zoom": 11
  }
}

export default App