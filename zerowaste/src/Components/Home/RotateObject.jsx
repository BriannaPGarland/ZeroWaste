import React, { useState } from 'react';
import './Home.css';
import arrow from "./Arrow.png";
import FoodCard from './FoodCard.jsx';

const RotObj = () => {

  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleArrowClick = (increment) => {
    setFocusedIndex((prevIndex) => {
      let newIndex = prevIndex + increment;
      if (newIndex < 0) {
        newIndex = 3;
      } else if (newIndex > 3) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const focusStyle = { transform: 'scale(1.1)', transition: 'all 0.5s ease-in-out' };
  const defaultStyle = { transform: 'scale(1)', transition: 'all 0.5s ease-in-out' };

  return (
    <div className="rotateObj">
      <img className="leftArrow" src={arrow} alt="" onClick={() => handleArrowClick(-1)}></img>
      <div className="spefic" style={focusedIndex === 0 ? focusStyle : defaultStyle}>
        <FoodCard />
      </div>
      <div className="spefic" style={focusedIndex === 1 ? focusStyle : defaultStyle}>
        <FoodCard />
      </div>
      <div className="spefic" style={focusedIndex === 2 ? focusStyle : defaultStyle}>
        <FoodCard />
      </div>
      <div className="spefic" style={focusedIndex === 3 ? focusStyle : defaultStyle}>
        <FoodCard />
      </div>
      <img className="rightArrow" src={arrow} alt="" onClick={() => handleArrowClick(1)}></img>
    </div>
  );
}

export default RotObj;