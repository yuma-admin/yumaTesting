import React, { useState }  from 'react';
import '../carouselcard.css';
import Accessories from '../Images/Accessories.png';


function CarouselCard1(props) {

    const returnMenu = () => {
        window.location = '/deliverytest'
        window.open('/deliverytest');
    }
    return(
        <div className='card-container'>
            <div className='carousel-card'>
                <div className='image-container'>
                    <img className="carousel-images" src={Accessories}/>
                </div>
                <button className='carousel-buttons' onClick={() => returnMenu()}>Accessories</button>
            </div>
            {/* <button className='carousel-buttons'>Accessories</button> */}
        </div>
    );
}

export default CarouselCard1;



