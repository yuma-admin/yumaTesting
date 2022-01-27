import CarouselCard from "./carouselCard";
import CarouselCard2 from "./carouselCard2";
import CarouselCard3 from "./carouselCard3";
import CarouselCard4 from "./carouselCard4";
import Carousel from './carousel';
import {v4 as uuidv4} from "uuid"


function carouselFinal() {
    let cards =[
        {
            key: uuidv4(),
            content: (
                <CarouselCard/>
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
        }
    ];
    return (
        <div className="">
            <Carousel
            cards ={cards}
            height = "150px"
            width = "50%"
            margin = "0 auto"
            padding = "35px"
            offset = {2}
            showArrows = {false}
            /> 
        </div>
    )
}

export default carouselFinal;