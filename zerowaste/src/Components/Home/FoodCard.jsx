
import './Home.css';

import React, { Component } from 'react';
 
class FoodCard extends Component {
  render() {
    return (
      <div className="foodcard">
          <div className="foodname">
                Food Name
          </div>
          <hr></hr>
          <div className="foodamount">
                Amount        ___
          </div>
          <hr></hr>
          <div className="foodamount">
                Expires: --/--/--
          </div>
      </div>
    );
  }
}
 
export default FoodCard;
