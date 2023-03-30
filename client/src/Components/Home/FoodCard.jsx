
import './Home.css';

import React, { Component } from 'react';
 

export default function FoodCard (props) {
  const { name,exp,amount,units } = props;

  

    return (
      <div className="foodcard">
          <div className="foodname">
<<<<<<< HEAD:zerowaste/src/Components/Home/FoodCard.jsx
                {name}
          </div>
          <hr></hr>
          <div className="foodamount">
                Amount        {amount} {units}
          </div>
          <hr></hr>
          <div className="foodamount">
                Expires: {exp}
=======
              Name: Sugar
          </div>
          <hr></hr>
          <div className="foodamount">
                Amount        2lbs
          </div>
          <hr></hr>
          <div className="foodamount">
                Expires: 04/24/2024
>>>>>>> origin/sidd:client/src/Components/Home/FoodCard.jsx
          </div>
      </div>
    );
  
}
