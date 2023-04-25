import "./Recipies.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function RecipeItem(props) {
  const { name, amount } = props;

  return (
    <div className="recipeItem">
      <div className="rectitle">{name}</div>
      <div className="amountbar">
        <div className="amountvalue">{amount} per day</div>
        <div className="amountButtons">
          <div className="pencil">
            <Link className="rec" to="/">
              <img className="editButt" src="pencil.png" />
            </Link>
          </div>
          <div className="trash">
            <Link className="rec" to="/">
              <img className="trashButt" src="trash.png" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
