import React  from 'react';
import '../carouselcard.css';
import Prerolls from '../Images/Prerolls.png';

function CarouselCard() {

    return(
        <div className='card-container'>
            <div className='carousel-card'>
                <div className='image-container'>
                    <img className="carousel-images" src={Prerolls}/>
                </div>
                <button className='carousel-buttons'>Prerolls</button>
            </div>
            {/* <button className='carousel-buttons'>Prerolls</button> */}
        </div>
    );
}

export default CarouselCard;



