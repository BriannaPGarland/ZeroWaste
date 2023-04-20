import "./Home.css";
import { auth } from "../../Authorization/FirebaseConfig";
import React, { Component } from "react";

export default function FoodCard(props) {
  const { name, quantity } = props;
  console.log(name,quantity)

  return (
    <div className="foodcard">
      <div className="foodname">Name: {name}</div>
      <hr></hr>
      <div className="foodamount">Amount: {quantity}</div>
      <hr></hr>
    </div>
  );
}
