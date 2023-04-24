import "./Recipies.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function RecipeItem(props) {
  const { name, amount } = props;

  const onclickDel= (name) =>{
    alert(name);

    axios.delete('/http://localhost:3001/recipe?ID='+name)
    .then((res)=>{
    console.log(res);
    })
    .catch((error)=>{
      console.log(error);
    })
  }


  return (
    <div className="recipeItem">
      <div className="rectitle">{name}</div>
      <div className="amountbar">
        <div className="amountvalue">{amount} per day</div>
        <div className="amountButtons">
          <div className="pencil">
            {/* <Link className="rec" to="/Home"> */}
              <img className="editButt" src="pencil.png" alt=""/>
            {/* </Link> */}
          </div>
          <div className="trash">
            {/* <Link className="rec" to="/Home"> */}
              <button className="trashButt" onClick={onclickDel} > DEL </button>
              {/* <img className="trashButt" src="trash.png" /> */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
