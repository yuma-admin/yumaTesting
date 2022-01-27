import React, { useState, useEffect } from 'react';
import Carousel from 'react-spring-3d-carousel';



export default function CarouselInfo(props) {
    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index)};
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState(null);
    const [cards] = useState(table);

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    return (
        <div
        style={{ width: props.width, height: props.height, margin: props.margin, padding: props.padding}}
        >
        <Carousel
        slides = {cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        />
        </div>     
    );
}