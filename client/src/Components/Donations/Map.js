/*global google*/
import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./Donate.css";

export class MapComponent extends Component {
  render() {
    return (
      <div className="map-area">
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{
            lat: 40.745,

            lng: -74.034,
          }}
        >
          <Marker
            key="marker_1"
            icon={{
              url: "./marker.png",

              anchor: new google.maps.Point(17, 17),

              scaledSize: new google.maps.Size(50, 50),
            }}
            position={{
              lat: 40.752,

              lng: -74.026,
            }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUlIkP9w_X5DX4QPyNZRklfTjaHJVEQu0",
})(MapComponent);
