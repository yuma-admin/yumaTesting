import React from 'react';
import './deliveryMenu.css';
import MenuTest from './menuTest';

//This Page Will Display Once The User is Geolocated and Return the Correct Delivery Menu

function DeliveryMenu() {
    return (
        <>
        <div className='container-fluid'>
            <div className='deliveryBanner'>
                <h1 className='deliveryTitle'>DELIVERY</h1>
                <h2 className='deliveryHours'>8am-9pm</h2>
            </div>
            <div className='deliveryHeader'>
                <h2>
                FOR 30% OFF YOUR FIRST DELIVERY <strong>ORDER NOW!</strong>
                </h2>
            </div>
        </div>
        <MenuTest />
        </>
    )
}


export default DeliveryMenu