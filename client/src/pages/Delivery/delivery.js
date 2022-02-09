import React, { useEffect, useState} from 'react';
import DeliverySearch from "./Search/deliverySearch";
import DeliveryMap from "./Map/deliverymap";
import deliveryjson from './Map/deliveryjson';
import DeliveryFaqs from './DeliveryFaqs/deliveryfaqs';
import DeliveryCarousel from './DeliveryCarousel/deliveryCarousel';
import './delivery.css';

function Delivery() {

    // Id state 
    const [id, setId] = useState({
        id:""
    })   
    // Store distance state
    const [storeDistance,setStoreDistance] = useState({
        stores: [],
        zoom:null,
        center:null
    })

    const [mapParams,setMapParams] = useState({
        zoom:'5',
        center:{lat: 39.8283, lng: -98.5795}
    })

    // This triggers whenever the id or storeDistance state changes
    // This will then update the map zoom and centering 
    useEffect(() => {
        if(id.id){
            const filteredStores = storeJson.filter(store => store.id === id.id)
            setMapParams({...mapParams,zoom:'14',center:{lat:filteredStores[0].lat,lng:filteredStores[0].lng}})
        }
        if(!id.id && !storeDistance.zoom){
            setMapParams({...mapParams,zoom:'5',center:{lat: 39.8283, lng: -98.5795}})
        }
        if(storeDistance.zoom && storeDistance.center && !id.id){
            setMapParams({...mapParams,zoom:storeDistance.zoom, center: storeDistance.center})
        }
        
    },[id, storeDistance] )

    return (
        <div className='container-fluid'>
        <div className='deliveryDesktop'>
            <div className='deliveryHeader'>
                        <h2>
                        FOR 30% OFF YOUR FIRST DELIVERY <strong>ORDER NOW!</strong>
                        </h2>
                    </div>
                <div  className='deliveryInfo'>
                    <div className='deliveryFloat'>
                    <div className='floatContainer'>
                        <h2 className='floatHeader'>
                            DELIVERY
                        </h2>
                        <h3 className='floatSub'>
                            8am - 9pm
                        </h3>
                        <div className='floatList'>
                            <p>1. Create an account</p>
                            <p>2. Verify your I.D.</p>
                            <p>3. Place your order</p>
                            <div className='indentedList'>
                                <p>* Residential delivery only</p>
                                <p>* Must be 21+ to order</p>
                                <p>* Must be present at time of delivery</p>
                            </div>
                            <p>4. Pay with cash only</p>
                            <p>5. Enjoy!</p>
                        </div>
                        <DeliverySearch callBack = {setStoreDistance}></DeliverySearch>
                        </div>
                    </div>
                    <div className='stickyMap deliveryDesktopMap'> 
                            <DeliveryMap center={mapParams.center} zoom={mapParams.zoom} windowSize={'100vh'}></DeliveryMap> 
                        </div>
                         <div className='stickyMap deliveryMobileMap'> 
                            <DeliveryMap center={mapParams.center} zoom={mapParams.zoom -2} windowSize={'70vh'}></DeliveryMap> 
                        </div>
                </div>
            <DeliveryCarousel />
            <DeliveryFaqs />
            </div>
            <div className='deliveryMobile'>
                <div className='deliveryHeader'>
                    <h2>
                    FOR 30% OFF YOUR FIRST DELIVERY <strong>ORDER NOW!</strong>
                    </h2>
                </div>
                <div className='mobileHours'>
                    <h2>
                        Delivery
                    </h2>
                    <p>
                        8am - 9pm
                    </p>
                </div>
                <div className='deliveryMobileSearch'>
                    <DeliverySearch callBack = {setStoreDistance}></DeliverySearch>
                </div>
                <div className='stickyMap deliverymobileMap'> 
                    <DeliveryMap center={mapParams.center} zoom={mapParams.zoom -2} windowSize={'60vh'}></DeliveryMap>
                </div> 
                <div className='deliveryMobileContainer'>
                    <h2 className='deliveryMobileHeader'>
                    How To Get Delivery
                    </h2>
                    <div className='deliveryMobileList'>
                            <p>1. Create an account</p>
                            <p>2. Verify your I.D.</p>
                            <p>3. Place your order</p>
                            <div className='mobileIndentedList'>
                                <p>* Residential delivery only</p>
                                <p>* Must be 21+ to order</p>
                                <p>* Must be present at time of delivery</p>
                            </div>
                            <p>4. Pay with cash only</p>
                            <p>5. Enjoy!</p>
                    </div>
                </div> 
                <DeliveryCarousel />       
            </div>
        </div>
    )
}

export default Delivery