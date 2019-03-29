import React from "react";
import Tweets from "./Tweets";

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      zoom: 13,
      maptype: "roadmap",
      place: {
        place_formatted: "",
        place_id: "",
        place_location: "",
        viewport: ""
      },
      center: { lat: 34.0522, lng: -118.2437 },
      miles: 2
    };
  }
  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: this.state.center,
      zoom: this.state.zoom,
      mapTypeId: this.state.maptype,
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: window.google.maps.ControlPosition.TOP_CENTER
      }
    });

    map.addListener("zoom_changed", () => {
      this.setState({
        zoom: map.getZoom()
      });
      console.log(this.state.zoom);
    });

    map.addListener("maptypeid_changed", () => {
      this.setState({
        maptype: map.getMapTypeId()
      });
    });

    var mileCircle;
    const drawcircle = (center, miles) => {
      mileCircle = new window.google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map,
        center: center,
        radius: miles * 1609.34
      });
    };
    drawcircle(this.state.center, this.state.miles);

    const updateMap = (place, miles, center) => {
      mileCircle.setMap(null);
      map.fitBounds(place.viewport);
      map.setZoom(Math.round(14 - Math.log(miles) / Math.LN2));
      map.setCenter(center);
      marker.setPlace({
        placeId: place.place_id,
        location: center
      });
      // cityCircle.setMap(null);
      drawcircle(center, miles);
    };

    let marker = new window.google.maps.Marker({
      map: map,
      position: this.state.center
    });

    // initialize the autocomplete functionality using the #pac-input input box
    let inputNode = document.getElementById("pac-input");
    let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

    autoComplete.addListener("place_changed", () => {
      let place = autoComplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("Sorry can't find'" + place.name + "'");
        return;
      }

      let location = place.geometry.location;
      let coords = location
        .toString()
        .replace(/[() ]/g, "")
        .split(",");

      //update state with information about the selected place
      this.setState({
        place: {
          place_formatted: place.formatted_address,
          place_id: place.place_id,
          viewport: place.geometry.viewport,
          place_location: location.toString()
        },
        center: { lat: parseFloat(coords[0]), lng: parseFloat(coords[1]) }
      });

      // bring the selected place in view on the map
      updateMap(this.state.place, this.state.miles, this.state.center);
    });

    let milesinput = document.getElementById("miles-input");
    milesinput.addEventListener("change", () => {
      this.setState({
        miles: parseFloat(milesinput.value)
      });
      // reset map with new search parameters
      updateMap(this.state.place, this.state.miles, this.state.center);
    });
  }

  render() {
    return (
      <div id="map-wrapper">
        <div id="pac-container">
          <label for="pac-input">Location:</label>
          <input id="pac-input" type="text" placeholder="Search for a place" />
          <label for="miles-input">Miles</label>
          <input id="miles-input" type="text" />
        </div>
        <div id="tweet-map-wrapper">
          <div id="map" />
          <Tweets
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            m={this.state.miles}
          />
        </div>
      </div>
    );
  }
}
