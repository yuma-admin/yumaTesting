// For Future Developments. Was Included in Mockups But Later Dropped. Here's the code if that changes

import CarouselCard1 from "./CarouselCards/carouselCard1";
import CarouselCard2 from "./CarouselCards/carouselCard2";
import CarouselCard3 from "./CarouselCards/carouselCard3";
import CarouselCard4 from "./CarouselCards/carouselCard4";
import CarouselCard5 from "./CarouselCards/carouselCard5";
import CarouselCard6 from "./CarouselCards/carouselCard6";
import CarouselCard7 from "./CarouselCards/carouselCard7";
import Carousel from './carousel';
import {v4 as uuidv4} from "uuid"


function carouselFinal() {
    let cards =[
        {
            key: uuidv4(),
            content: (
                <CarouselCard1/>
            )
        },
        {
            key: uuidv4(),
            content: (
                <CarouselCard2 />
            )
        },
        {
            key: uuidv4(),
            content: (
                <CarouselCard3 />
            )
        },
        {
            key: uuidv4(),
            content: (
                <CarouselCard4 />
            )
        },
        {
            key: uuidv4(),
            content: (
                <CarouselCard5 />
            )
        },
        {
            key: uuidv4(),
            content: (
                <CarouselCard6 />
            )
        },
        {
            key: uuidv4(),
            content: (
                <CarouselCard7 />
            )
        }
    ];
    return (
        <div className="">
            <Carousel
            cards ={cards}
            height = "150px"
            margin = "15px 10px 15px 10px"
            padding = "45px"
            align-items = "center"
            offset = {2}
            showArrows = {false}
            /> 
        </div>
    )
}

export default carouselFinal;