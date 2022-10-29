import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import './GMaps.css'

const API_KEY = 'AIzaSyBx9uEFCRpqJZQ1-4dUm0sHvyJl96K1OaQ'
 
export class MapContainer extends Component {
    render() {
        return (
            <div className='gmap'>
                <Map 
                    google={this.props.google} 
                    zoom={14} 
                    style={{width: "100%", height: '100%', overflow: 'hidden', position: 'relative'}}
                    initialCenter={
                        {
                            lat: 9.988386978962652,
                            lng: 76.30134426199614
                        }
                    }   
                >
                    <Marker
                        title={'IMA Hall, Kaloor'}
                        name={'IMA Hall'}
                        position={{lat: 9.988386978962652, lng: 76.30134426199614}}
                        
                    />
                </Map>
            </div>
        );
    }
}
 
export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer)