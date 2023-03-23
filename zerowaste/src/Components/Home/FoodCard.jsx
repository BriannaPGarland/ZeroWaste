
import './Home.css';

import React, { Component } from 'react';
 
export default function FoodCard (props) {
  const { name,exp,amount,units } = props;

  
    return (
      <div className="foodcard">
          <div className="foodname">
                {name}
          </div>
          <hr></hr>
          <div className="foodamount">
                Amount        {amount} {units}
          </div>
          <hr></hr>
          <div className="foodamount">
                Expires: {exp}
          </div>
      </div>
    );
  
}
