import React  from 'react';
import '../carouselcard.css';
import Edibles from '../Images/Edibles.png';

function CarouselCard2() {

    return(
        <div className='card-container'>
            <div className='carousel-card'>
                <div className='image-container'>
                    <img className="carousel-images" src={Edibles}/>
                </div>
                <button className='carousel-buttons'>Edibles</button>
            </div>
            {/* <button className='carousel-buttons'>Edibles</button> */}
        </div>
    );
}

export default CarouselCard2;



