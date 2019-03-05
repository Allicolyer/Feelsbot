import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
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
    mapData.map(place => {
      return (
        <Marker
          onClick={this.onMarkerClick}
          name={place.name}
          position={{lat: place.lat, lng: place.lng }}
        />
      )
    })
  )
}

  render() {
    return (
    <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: -1.2884, lng: 36.8233 }}
      >

        {this.getMarkers()}

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

const mapData= [{lat: -1.2895, lng: 36.8253, name:"Appliance Store"},
                    {lat: -1.2875, lng: 36.8253, name:"Laundry Mat"},
                    {lat: -1.2900, lng: 36.8240, name:"Recycling Facility"},
                    {lat: -1.2888, lng: 36.8288, name:"Boomers"},
                    {lat: -1.2888, lng: 36.8330, name:"Taco Truck"}]


export default GoogleApiWrapper({
  apiKey: 'AIzaSyD-uS3jtZAosd0XdO5RWHSDW1L_r7fIZVk'
})(MapContainer);

