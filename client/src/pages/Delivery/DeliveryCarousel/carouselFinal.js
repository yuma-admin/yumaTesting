import CarouselCard1 from "./carouselCard1";
import CarouselCard2 from "./carouselCard2";
import CarouselCard3 from "./carouselCard3";
import CarouselCard4 from "./carouselCard4";
import CarouselCard5 from "./carouselCard5";
import CarouselCard6 from "./carouselCard6";
import CarouselCard7 from "./carouselCard7";
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
            margin = "0 auto"
            padding = "35px"
            offset = {2}
            showArrows = {false}
            /> 
        </div>
    )
}

export default carouselFinal;