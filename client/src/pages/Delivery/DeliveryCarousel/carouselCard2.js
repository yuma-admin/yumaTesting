import React  from 'react';
import './carouselcard.css';
import Edibles from './Images/Edibles.png';

function CarouselCard2() {

    return(
        <div className='card-container'>
            <div className='carousel-card'>
                <div className='image-container'>
                    <img className="carousel-images" src={Edibles}/>
                </div>
                {/* <a href="#">Accessories</a> */}
            </div>
        </div>
    );
}

export default CarouselCard2;



