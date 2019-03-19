import React, { Component } from "react";
import "../styles/App.css";
import Map from "./Map";
import cities from "./cityData";
import { Button } from "rebass";
// import ibmRequest from "./ibm-request";
import Posts from "./Posts";

// const twitterURL = process.env.REACT_APP_TWITTER_URI;

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

  //renders the maps for the city that wsa clicked on. Triggers the function that
  // grabs the tweets from the twitter API with that city's data
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
    // this.grabTweets(cityData.lat, cityData.lng, cityData.miles);
  };

  // // function that returns the city's tweets
  // grabTweets = (lat, lng, m) => {
  //   return fetch(`${twitterURL}&geocode=${lat},${lng},${m}mi`)
  //     .then(res => res.json())
  //     .then(r => {
  //       console.log("res", r);
  //       console.log(`${twitterURL}&geocode=${lat},${lng},${m}mi`);
  //       let tweets = JSON.stringify(
  //         r.statuses.map(
  //           status =>
  //             `<tr><td>${status.user.name}</td><td>${status.text}</td></tr>`
  //         )
  //       );
  //       document.getElementById(
  //         "tweets"
  //       ).innerHTML = `<table>${tweets}</table>`;
  //       // if the tweet is long enough, detect the emotion in it
  //       if (r.statuses[0].text.length > 100) {
  //         this.detectEmotion(r.statuses[0].text);
  //         console.log(r.statuses[0].text);
  //       }
  //       return this.setState({
  //         tweets: r.statuses
  //       });
  //     })
  //     .catch(err => console.error(err));
  // };

  // //uses the IBM Natural Language Understanding API to detect emotion behind tweets
  // detectEmotion = async text => {
  //   let ibmresponse = await ibmRequest(`${text}`);
  //   console.log(ibmresponse.emotion.document.emotion);
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Pick a City</h1>
          <CityList renderCity={this.renderCity} />
          <Posts
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            m={this.state.miles}
          />
        </header>
        <div id="tweets" />
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
