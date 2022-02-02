import React  from 'react';
import './carouselcard.css';
import Flower from './Images/Flower.png';

function CarouselCard() {

    return(
        <div className='card-container'>
            <div className='carousel-card'>
                <div className='image-container'>
                    <img className="carousel-images" src={Flower}/>
                </div>
                {/* <a className='carousel-links' href="#">Flower</a> */}
            </div>
            <button className='carousel-buttons'>Flower</button>
        </div>
    );
}

export default CarouselCard;



