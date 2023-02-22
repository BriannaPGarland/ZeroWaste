
import './Home.css';

import React, { Component } from 'react';

import arrow from "./Arrow.png";

import FoodCard from './FoodCard.jsx';
 
class RotObj extends Component {
  render() {
    return (
      <div className="rotateObj">
        
        <img className="leftArrow" src={arrow}></img>
          
          <div className="spefic">
            <FoodCard ></FoodCard>
          </div>
          <div className="spefic">
            <FoodCard ></FoodCard>
          </div>
          <div className="spefic">
            <FoodCard ></FoodCard>
          </div>
          <div className="spefic">
            <FoodCard ></FoodCard>
          </div>
          <img className="rightArrow"src={arrow}></img>
      </div>
    );
  }
}
 
export default RotObj;
