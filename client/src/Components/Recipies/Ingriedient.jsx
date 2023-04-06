import "./Recipies.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Ingriedient extends Component {
  render() {
    return (
      <div className="recipeItem">
        <div className="rectitle">Flour</div>
        <div className="amountbar">
          <div className="amountvalue">3 cups</div>
          <div className="amountButtons">
            <div className="pencil">
              <Link className="rec" to="/Home">
                <img className="editButt" src="pencil.png" />
              </Link>
            </div>
            <div className="trash">
              <Link className="rec" to="/Home">
                <img className="trashButt" src="trash.png" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ingriedient;
