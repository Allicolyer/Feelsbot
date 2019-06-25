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
      // icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }
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

    let milesinput = document.getElementById("miles-input");
    milesinput.value = "2";
    milesinput.addEventListener("change", () => {
      this.setState({
        miles: Math.round(parseFloat(milesinput.value))
      });
      // reset map with new search parameters
      updateMap(this.state.place, this.state.miles, this.state.center);
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
              <Subtitle> Enter a location to search near</Subtitle>
              <Input
                id="pac-input"
                type="text"
                placeholder="Search for a place"
              />
            </LocationContainer>
            <MilesContainer>
              <Subtitle> Enter how many miles to search</Subtitle>
              <Input type="text" id="miles-input" />
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
  font-size: 1.5rem;
  border: 1px solid ${p => p.theme.colors.primary};
  text-align: center;
`;

const LocationContainer = styled.div`
  width: 50%;
  margin: 0 0.5em 1em 0;
  @media ${mobile} {
    width: 100%;
    margin: 0 0 0 0;
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

export default Map;
