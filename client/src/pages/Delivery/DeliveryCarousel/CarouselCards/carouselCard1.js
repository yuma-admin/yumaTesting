import React  from 'react';
import '../carouselcard.css';
import Accessories from '../Images/Accessories.png';

function CarouselCard1() {

    return(
        <div className='card-container'>
            <div className='carousel-card'>
                <div className='image-container'>
                    <img className="carousel-images" src={Accessories}/>
                </div>
            </div>
            <button className='carousel-buttons'>Accessories</button>
        </div>
    );
}

export default CarouselCard1;



