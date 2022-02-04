import React  from 'react';
import '../carouselcard.css';
import Topicals from '../Images/Topicals.png';

function CarouselCard() {

    return(
        <div className='card-container'>
            <div className='carousel-card'>
                <div className='image-container'>
                    <img className="carousel-images" src={Topicals}/>
                </div>
                <button className='carousel-buttons'>Topicals</button>
            </div>
            {/* <button className='carousel-buttons'>Topicals</button> */}
        </div>
    );
}

export default CarouselCard;



