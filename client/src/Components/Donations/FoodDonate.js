import "./Donate.css";

import React, { Component } from "react";

export default function FoodDonate(props) {
  const { name, amount,units } = props;

  return (
    <div className="ExpiringItem">
        <label class="container">{amount} {units} of {name}  
            <input type="checkbox" ></input>
            <span class="checkmark"></span>
        </label>
    </div>
  );
}