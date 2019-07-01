import React from "react";
import Tweets from "./Tweets";
import styled from "styled-components";
import { Content, Subtitle, FlexColumn, Flex, mobile } from "./shared";
import { theme } from "../styles/theme";

class Map extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef(); // Create a ref object
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
      miles: 2,
      renderTweets: false
    };
  }
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);

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
    });

    map.addListener("maptypeid_changed", () => {
      this.setState({
        maptype: map.getMapTypeId()
      });
    });

    var mileCircle;
    const drawcircle = (center, miles) => {
      mileCircle = new window.google.maps.Circle({
        strokeColor: `${theme.colors.primary}`,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: `${theme.colors.primary}`,
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
      map.setZoom(zoomLevels[miles]);
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
    inputNode.value = "";
    let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

    autoComplete.addListener("place_changed", () => {
      let place = autoComplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert(`Sorry I can't find '${place.name}'`);
        return;
      }
      if (!milesinput.value) {
        window.alert("Pleae enter how many miles I should search");
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
        center: { lat: parseFloat(coords[0]), lng: parseFloat(coords[1]) },
        renderTweets: true
      });
      // bring the selected place in view on the map
      updateMap(this.state.place, this.state.miles, this.state.center);
      setTimeout(() => {
        this.scrollToMyRef();
      }, 1000);
    });

    //event listener that handles when miles are changed
    let milesinput = document.getElementById("miles-input");

    milesinput.addEventListener("change", () => {
      this.setState({
        miles: parseFloat(milesinput.value)
      });
      //if there is no input location value, ask the user to enter a location
      if (!inputNode.value) {
        window.alert("Please enter a location to search");
        return;
      }
      // reset map with new search parameters
      updateMap(this.state.place, this.state.miles, this.state.center);
      // scroll to the tweets
      setTimeout(() => {
        this.scrollToMyRef();
      }, 1000);
    });
  }

  render() {
    return (
      <FlexColumn>
        <Content>
          <ResponsiveFlex>
            <LocationContainer>
              <Subtitle> Search for a Location</Subtitle>
              <Input
                id="pac-input"
                type="text"
                placeholder="Example: Los Angeles"
              />
            </LocationContainer>
            <MilesContainer>
              <Subtitle> Select a Distance</Subtitle>
              <Select id="miles-input" defaultValue="2">
                <option value="1">1 Mile</option>
                <option value="2">2 Miles</option>
                <option value="3">3 Miles</option>
                <option value="4">4 Miles</option>
                <option value="5">5 Miles</option>
                <option value="10">10 Miles</option>
                <option value="20">20 Miles</option>
                <option value="30">30 Miles</option>
                <option value="40">40 Miles</option>
                <option value="50">50 Miles</option>
                <option value="60">60 Miles</option>
                <option value="70">70 Miles</option>
                <option value="80">80 Miles</option>
                <option value="90">90 Miles</option>
                <option value="100">100 Miles</option>
                <option value="200">200 Miles</option>
              </Select>
            </MilesContainer>
          </ResponsiveFlex>
        </Content>
        <MapDiv id="map" />
        <Content>
          <div ref={this.myRef}>
            {this.state.renderTweets && (
              <Tweets
                lat={this.state.center.lat}
                lng={this.state.center.lng}
                m={this.state.miles}
                location={this.state.place.place_formatted}
                map
              />
            )}
          </div>
        </Content>
      </FlexColumn>
    );
  }
}

const MapDiv = styled.div`
  height: 400px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 2em;
  font-size: 1em
  line-height: 1.25em;
  border: 1px solid ${p => p.theme.colors.primary};
  text-align: center;
  padding: 0;
`;

const Select = styled.select`
  width: 100%;
  height: 2em;
  font-size: 1em
  line-height: 1.25em;
  text-align-last: center;
  border: 1px solid ${p => p.theme.colors.primary};
  padding: 0;
`;

const LocationContainer = styled.div`
  width: 50%;
  margin: 0 0.5em 1em 0;
  @media ${mobile} {
    width: 100%;
    margin: 0;
`;

const MilesContainer = styled.div`
  width: 50%;
  margin: 0 0 1em 0.5em;
  @media ${mobile} {
    width: 100%;
    margin: 0 0 1em 0;
  }
`;

const ResponsiveFlex = styled(Flex)`
  @media ${mobile} {
    flex-direction: column;
  }
`;

const zoomLevels = {
  1: 13,
  2: 13,
  3: 12,
  4: 12,
  5: 11,
  10: 10,
  20: 9,
  30: 9,
  40: 8,
  50: 8,
  60: 8,
  70: 7,
  80: 7,
  90: 7,
  100: 7,
  200: 6
};

export default Map;
