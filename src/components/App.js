import React, { Component } from 'react';
import '../styles/App.css';
import Map from './Map'
import cities from './cityData'
import {
  Button,
} from 'rebass'

class App extends Component {
  constructor() {
    super();
    // Define the initial state:
    this.state = {
      city: "default",
      center: {lat: 40.7127, lng: -74.0059},
      zoom: 13
    };
  }

  renderCity = (e) =>{
    e.preventDefault();
    let city = e.target.textContent;
    let cityData = cities[e.target.dataset.index];
    this.setState({
      city: city,
      center:{lat: cityData.lat, lng: cityData.lng},
      zoom:cityData.zoom
    })
  }

  render() {
    console.log("state", this.state.center);
    return (
      <div className="App">
        <header className="App-header">
          <CityList renderCity={this.renderCity}/>
        </header>
        <div id="map">
          <Map
            city = {this.state.city}
            center = {this.state.center}
            zoom = {this.state.zoom}
          />
        </div>
      </div>
    );
  }
}

const CityButton = (props) => {
  return (
    <Button
      data-index = {props.index}
      onClick={props.renderCity}
      color='white'
      bg='#282c34'
      mx={.5}>
      {props.name}
    </Button>
  )
};

const CityList = (props) => {
  return cities.map((city, index) => <CityButton name={city.name} index={index} renderCity={props.renderCity}/>)
}

export default App