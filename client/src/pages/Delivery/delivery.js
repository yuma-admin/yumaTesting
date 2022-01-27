import React, { useEffect, useState} from 'react';
import DeliverySearch from "./Search/deliverySearch";
import DeliveryMap from "./Map/deliverymap";
import deliveryjson from './Map/deliveryjson';
import { Container, Row, Col} from 'react-bootstrap';
import DeliveryCarousel from './DeliveryCarousel/deliveryCarousel';
import './delivery.css';

function Delivery() {

    const [mapParams,setMapParams] = useState({
        zoom:'5',
        center:{lat: 39.8283, lng: -98.5795}
    })

    return (
        <div className='storePageHeight'>
            <Container fluid>
                <Row>
                <Col xs={{span:12,order:1}} sm={{span:12,order:1}} lg={{span:8,order:2}} className='deliveryInfo'>
                    <div className='deliveryHeader'>
                        <h1>FOR 30% OFF YOUR FIRST DELIVERY ORDER NOW!</h1>
                    </div>
                </Col>
                <Col xs={{span:12,order:1}} sm={{span:12,order:1}} lg={{span:8,order:2}} className='mapCol'>
                        <div className='mobileSearch'>
                            <DeliverySearch callBack = {setStoreDistance}></DeliverySearch>
                        </div>
                        <div className='stickyMap desktopMap'> 
                            <DeliveryMap center={mapParams.center} zoom={mapParams.zoom} windowSize={'calc(100vh  - 70px - 55px)'}></DeliveryMap> 
                        </div>
                         <div className='stickyMap mobileMap'> 
                            <DeliveryMap center={mapParams.center} zoom={mapParams.zoom -2} windowSize={'70vh'}></DeliveryMap> 
                        </div>
                    </Col>
                </Row>
            </Container>
            <DeliveryCarousel />
        </div>
    )
}

export default Delivery