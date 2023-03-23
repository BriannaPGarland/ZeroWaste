import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const CarouselComponent = () => {
    return (
            <div>
            <Carousel showArrows={true} interval={5000} infiniteLoop={true} autoPlay={true} showThumbs={false} showIndicators={true}>
                <div>
                    <img src="https://picsum.photos/1200/600?random=7" />
                    
                </div>
                <div>
                    <img src="https://picsum.photos/1200/600?random=5" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://picsum.photos/1200/600?random=3" />
                    
                </div>
            </Carousel>
            </div>
            )
    }
    export default CarouselComponent;















