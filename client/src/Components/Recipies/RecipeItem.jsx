import "./Recipies.css";
import React from "react";
import { Link } from "react-router-dom";

export default function RecipeItem(props) {
  const { name, numberOfUnits, _id, currentUserUid, onDelete } = props;

  return (
    <div className="recipeItem">
      <div className="rectitle">{name}</div>
      <div className="amountbar">
        <div className="amountvalue">{numberOfUnits} per day</div>
        <div className="amountButtons">
          <div className="pencil">
            <Link className="rec" to="/">
              <img className="editButt" src="pencil.png" />
            </Link>
          </div>
          <div className="trash">
            <button
              className="rec"
              onClick={() => onDelete(currentUserUid, _id)}
            >
              <img className="trashButt" src="trash.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
