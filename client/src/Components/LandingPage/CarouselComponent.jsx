import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import foodIMG1 from "./foodIMG1.png";
import foodIMG2 from "./foodIMG2.png";
import foodIMG3 from "./foodIMG3.png";

const CarouselComponent = () => {
  //"https://picsum.photos/1200/600?random=7"
  //"https://picsum.photos/1200/600?random=5"
  //"https://picsum.photos/1200/600?random=3"
  return (
    <div>
      <Carousel
        showArrows={true}
        interval={5000}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showIndicators={true}
      >
        <div>
          <img src={foodIMG1} style={{ height: "25em" }} />
        </div>
        <div>
          <img src={foodIMG2} style={{ height: "25em" }} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={foodIMG3} style={{ height: "25em" }} />
        </div>
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
