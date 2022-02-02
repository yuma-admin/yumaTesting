import React  from 'react';
import './carouselcard.css';
import Carts from './Images/Carts.png';

function CarouselCard3() {

    return(
        <div className='card-container'>
            <div className='carousel-card'>
                <div className='image-container'>
                    <img className="carousel-images" src={Carts}/>
                </div>
                {/* <a className='carousel-links' href="#">Carts</a> */}
            </div>
            <button className='carousel-buttons'>Carts</button>
        </div>
    );
}

export default CarouselCard3;



