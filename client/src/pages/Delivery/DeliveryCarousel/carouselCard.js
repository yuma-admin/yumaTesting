import React  from 'react';
import './carouselcard.css';
import Accessories from './Images/Accessories.png';

function CarouselCard() {

    return(
        <div className='card-container'>
            <div className='carousel-card'>
                <div className='image-container'>
                    <img className="carousel-images" src={Accessories}/>
                </div>
                {/* <a href="#">Accessories</a> */}
            </div>
        </div>
    );
}

export default CarouselCard;



