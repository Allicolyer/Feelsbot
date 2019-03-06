import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import twitterData from './twitterData'

const mapStyles = {
  width: '80%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

getMarkers(){
  return (
    twitterData.statuses.map(object => {
      return (
        <Marker
          onClick={this.onMarkerClick}
          name={object.user.name}
          position={
            {lat: (40.7127 + .1*(Math.random()-.5)),
              lng: (-74.0059 + .1*(Math.random()-.5))}}
        />
      )
    })
  )
}

  render() {
    return (
    <Map
        google={this.props.google}
        zoom={this.props.zoom}
        style={mapStyles}
        center={this.props.center}
      >

        {/* {this.getMarkers()} */}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD-uS3jtZAosd0XdO5RWHSDW1L_r7fIZVk'
})(MapContainer);
