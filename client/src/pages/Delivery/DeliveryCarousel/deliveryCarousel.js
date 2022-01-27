import '../DeliveryCarousel/deliverycarousel.css';
import DeliveryFaqs from '../DeliveryFaqs/deliveryfaqs';
import Carousel from './carouselFinal';

function DeliveryCarousel() {
    return (
        <div className="container-fluid">
            <div className="carousel-container" id="carousel-desktop">
                <div className="carousel-section carousel-border" id="carousel-desktop">
                    <div className="col-6">
                        <h1 className="carousel-header">BROWSE OUR MENU</h1>
                        <Carousel />
                    </div>
                </div>
            </div>
            <DeliveryFaqs />
        </div>

    )
}

export default DeliveryCarousel
