import React, { useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import DeliveryMap from "./Map/deliverymap";
import DeliveryFaqs from './DeliveryFaqs/deliveryfaqs';
import GeolocateButton from './Geolocate Modal/geolocateButton';
import DeliveryMobilemap from './Map/deliveryMobilemap';
import './delivery.css';

function Delivery() {

    //Jane's Tracking Script
    const janescript = document.createElement("script");
    janescript.async = true;
    janescript.src =     
    `document.addEventListener("click", function(e) {
          var linkNode = e.srcElement.href ? e.srcElement : e.srcElement.parentNode;
      if(linkNode.localName !== "a" || linkNode.href.endsWith("#")) return;
      
      e.preventDefault();
      var currentQuery = location.search.substr(1);
      var url = new URL(linkNode.href);
      url.search += (url.search.indexOf('?') > -1 ? '&' : '?') + currentQuery;
      var dst = e.target;
      if (dst.target) {
    window.open(url.toString(), dst);
      } else {
    location.assign(url.toString());
      }
    })`;
    document.head.appendChild(janescript);

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

    const history = useHistory();
    console.log(history);

    return (
        <div className='container-fluid'>
        <Helmet>
            <title>Yuma Way | Order Delivery Now</title>
            <meta name='description' content='Yuma Way now offering delivery in select areas! Click to see if we are delivering in your area!'/> 
            <meta name='keywords' content='Denver, marijuana, delivery, denver cannabis delivery, marijuana delivery near me, THC, flower, concentrates, edibles, cartridges'/>
        </Helmet>
        <div className='deliveryDesktop'>
            <div className='deliveryHeader'>
                        <h2>
                        FOR 30% OFF YOUR FIRST DELIVERY <strong>ORDER NOW!</strong>
                        </h2>
                    </div>
                <div  className='deliveryInfo'>
                    <div className='deliveryFloat'>
                        <h2 className='floatHeader'>
                            DELIVERY
                        </h2>
                        <h3 className='floatSub'>
                            8am - 9pm
                        <p>* Delivery To Residential Addresses Only</p>
                        </h3>
                        <div className='floatList'>
                        </div>
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
                        <GeolocateButton />
                    </div>
                    <div className='stickyMap deliveryDesktopMap'> 
                            <DeliveryMap center={mapParams.center} zoom={mapParams.zoom} windowSize={'80vh'}></DeliveryMap> 
                        </div>   
                </div>
            {/* <DeliveryCarousel /> */}
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
                    {/* <p>
                        * Residential Address Delivery Only
                    </p> */}
                <GeolocateButton />
                </div>
                <div className='stickyMap deliverymobileMap'> 
                    <DeliveryMobilemap center={mapParams.center} zoom={mapParams.zoom -2} windowSize={'60vh'}></DeliveryMobilemap>
                </div> 
                {/* <div className='deliveryMobileContainer'>
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
                </div>  */}
                {/* <DeliveryCarousel />        */}
                <DeliveryFaqs />
            </div>
        </div>
    )
}

export default Delivery