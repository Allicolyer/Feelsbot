import React from "react";
import Tweets from "./Tweets";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      zoom: 13,
      maptype: "roadmap",
      place_formatted: "",
      place_id: "",
      place_location: "",
      center: {}
    };
  }
  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      mapTypeId: "roadmap"
    });
    map.addListener("zoom_changed", () => {
      this.setState({
        zoom: map.getZoom()
      });
    });

    map.addListener("maptypeid_changed", () => {
      this.setState({
        maptype: map.getMapTypeId()
      });
    });
    let marker = new window.google.maps.Marker({
      map: map,
      position: { lat: -33.8688, lng: 151.2195 }
    });

    // initialize the autocomplete functionality using the #pac-input input box
    let inputNode = document.getElementById("pac-input");
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
    let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

    autoComplete.addListener("place_changed", () => {
      let place = autoComplete.getPlace();
      let location = place.geometry.location;
      let coords = location
        .toString()
        .replace(/[() ]/g, "")
        .split(",");

      this.setState({
        place_formatted: place.formatted_address,
        place_id: place.place_id,
        place_location: location.toString(),
        center: { lat: parseFloat(coords[0]), lng: parseFloat(coords[1]) }
      });

      // bring the selected place in view on the map
      map.fitBounds(place.geometry.viewport);
      map.setCenter(location);

      marker.setPlace({
        placeId: place.place_id,
        location: location
      });
    });
  }

  render() {
    return (
      <div id="map-tweet-wrapper">
        <div id="map" />
        <div id="pac-container">
          <input id="pac-input" type="text" placeholder="Enter a location" />
        </div>

        <Tweets
          lat={this.state.center.lat}
          lng={this.state.center.lng}
          m={10}
        />
      </div>
    );
  }
}
