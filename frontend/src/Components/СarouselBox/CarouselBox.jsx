import React from 'react'

import Carousel from "react-bootstrap/Carousel"
import './CarouselBox.css'

const CarouselBox = ({ph1, ph2, ph3, name}) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    src={ph1}
                    alt={name}
                />
                <Carousel.Caption>
                    <h2>{name}</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    src={ph2}
                    alt={name}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    src={ph3}
                    alt={name}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBox;