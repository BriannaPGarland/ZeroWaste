
import './Home.css';

import React, { Component } from 'react';
 
class FoodCard extends Component {


  render() {
    return (
      <div className="foodcard">
          <div className="foodname">
              Name: Sugar
          </div>
          <hr></hr>
          <div className="foodamount">
                Amount        2lbs
          </div>
          <hr></hr>
          <div className="foodamount">
                Expires: 04/24/2024
          </div>
      </div>
    );
  }
}
 
export default FoodCard;
