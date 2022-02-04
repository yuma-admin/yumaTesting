import React  from 'react';
import '../carouselcard.css';
import Carts from '../Images/Carts.png';

function CarouselCard3() {

    return(
        <div className='card-container'>
            <div className='carousel-card'>
                <div className='image-container'>
                    <img className="carousel-images" src={Carts}/>
                </div>
                <button className='carousel-buttons'>Carts</button>
            </div>
            
        </div>
    );
}

export default CarouselCard3;



