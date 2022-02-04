import React  from 'react';
import '../carouselcard.css';
import Concentrates from '../Images/Concentrates.png';

function CarouselCard4() {

    return(
        <div className='card-container'>
            <div className='carousel-card'>
                <div className='image-container'>
                    <img className="carousel-images" src={Concentrates}/>
                </div>
                <button className='carousel-buttons'>Concentrates</button>
            </div>
            {/* <button className='carousel-buttons'>Concentrates</button> */}
        </div>
    );
}

export default CarouselCard4;



