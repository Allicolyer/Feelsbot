import React, { Component } from "react";
import "../styles/App.css";
import Map from "./Map";
import cities from "./cityData";
import { Button } from "rebass";
import Tweets from "./Tweets";

class Home extends Component {
  constructor() {
    super();
    // Define the initial state:
    this.state = {
      city: "default",
      center: { lat: 40.7127, lng: -74.0059 },
      miles: 11,
      zoom: 13,
      tweets: null
    };
  }

  //renders the maps for the city that was clicked on.
  renderCity = e => {
    e.preventDefault();
    let city = e.target.textContent;
    let cityData = cities[e.target.dataset.index];
    this.setState({
      city: city,
      center: { lat: cityData.lat, lng: cityData.lng },
      miles: cityData.miles,
      zoom: cityData.zoom
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Pick a City</h1>
          <CityList renderCity={this.renderCity} />
          <Tweets
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            m={this.state.miles}
          />
        </header>
        <div id="map">
          <Map
            city={this.state.city}
            center={this.state.center}
            zoom={this.state.zoom}
          />
        </div>
      </div>
    );
  }
}

const CityButton = props => {
  return (
    <Button
      data-index={props.index}
      onClick={props.renderCity}
      color="white"
      bg="#282c34"
      mx={0.5}
    >
      {props.name}
    </Button>
  );
};

const CityList = props => {
  return cities.map((city, index) => (
    <CityButton name={city.name} index={index} renderCity={props.renderCity} />
  ));
};

export default Home;
