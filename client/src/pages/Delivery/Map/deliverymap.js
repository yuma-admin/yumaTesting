import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow, withGoogleMap } from 'react-google-maps';
import deliverymapStyles from './deliverymapStyles';
import deliveryjson from './deliveryjson';
import './deliverymapstyles.css';


export default function DeliveryMaps(props) {
    const zoom = 9
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
        {deliveryjson.map((coordinates) => (
        <Marker    
        key={coordinates.id}
        position={{lat: coordinates.lat, lng: coordinates.lng}}
        onClick={() => {
              setdeliveryStore(coordinates)
            }}
        >
        {deliveryStore&& deliveryStore.id === coordinates.id && (
              // Creates the window that pops up when a marker is clicked
        <InfoWindow onCloseClick={() => setdeliveryStore(null)}
         >
             <div className='infoWindow'>
               <a class="mapStoreLink" href={deliveryStore.href}>
                <img className='storeImage' src={`${process.env.PUBLIC_URL}${deliveryStore.exteriorStore}`} alt=''></img>
                <img className='storeLogo' src={`${process.env.PUBLIC_URL}${deliveryStore.logoPinch}`} alt=''></img>
                <h4 id='address'>{deliveryStore.address1}</h4>
                <h4 id='address'>{deliveryStore.address2}</h4>
                <h3 className='phone'>{deliveryStore.phone}</h3>
               </a>
               {/* <h3 className='phone'><a className='phoneLink' href={selectedStore.phone}>{selectedStore.phone}</a></h3> */}
             </div>
           </InfoWindow>
         )}
        </Marker>
        ))}    
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