import React, { useState } from 'react';
import { GoogleMap, Circle, InfoWindow, withGoogleMap } from 'react-google-maps';
import deliverymapStyles from './deliverymapStyles';
import deliveryjson from './deliveryjson';
import './deliverymapstyles.css';


export default function DeliveryMaps(props) {
    const zoom = 10
    const [ center, setCenter ] = useState({
        lat: 39.74,
        lng: -105
    })
    const options = {
        styles: deliverymapStyles,
        disableDefaultUI: true,
        zoomControl: true,
        clickableIcons: true
    }


function DeliveryMap() {
    const [deliveryStore, setdeliveryStore] = useState(null)

    return (
        <GoogleMap
        defaultZoom={zoom}
        defaultCenter={center}
        options={options}
        >
        {/* {deliveryjson.map((coordinates) => (
        <Circle    
        key={coordinates.id}
        defaultCenter={{lat: coordinates.lat, lng: coordinates.lng}}
        radius={coordinates.circle.radius}
        options={coordinates.circle.options}
        onClick={() => {
              setdeliveryStore(coordinates)
            }}
        >
        {deliveryStore && deliveryStore.id === coordinates.id}
        </Circle>
        ))}     */}
        </GoogleMap>
    )
}
// Wrapper for The Map

const WrappedMap = withGoogleMap(DeliveryMap)
return (
    <WrappedMap 
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
    loadingElement={<div style={{height: props.windowSize}}/>}
    containerElement={<div style={{height: props.windowSize}}/>}
    mapElement={<div style={{height: props.windowSize}}/>}
    className='stickyMap'
    />  
)
}