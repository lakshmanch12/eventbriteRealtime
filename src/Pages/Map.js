import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
   
  render() {
    return (
      <Map google={this.props.google}
      style={{width: '29%', height: '100%', position: 'relative'}}
      initialCenter={{
        lat:17.728209,
        lng: 83.275463
      }}
       zoom={10}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAZkoaU5e01mMxnDobifth62j7thkoPsGk')
})(MapContainer)