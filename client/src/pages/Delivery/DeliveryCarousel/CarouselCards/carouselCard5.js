import React  from 'react';
import '../carouselcard.css';
import Flower from '../Images/Flower.png';

function CarouselCard() {

    return(
        <div className='card-container'>
            <div className='carousel-card'>
                <div className='image-container'>
                    <img className="carousel-images" src={Flower}/>
                </div>
                <button className='carousel-buttons'>Flower</button>
            </div>
            {/* <button className='carousel-buttons'>Flower</button> */}
        </div>
    );
}

export default CarouselCard;



