import React from "react";
import "./Recipies.css";
import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem.jsx";

import testRecipeData from "./testRecipeData";

const Recipies = () => {
  return (
    <div className="recipePage">
      <h1 class="title">Recipies</h1>
      <div className="buttonSec">
        <Link className="AddNewButt" to="/AddRecipe">
          Add New
        </Link>
        <div className="ListRecipes">
          <div className="Reccolumns">
            {testRecipeData.map((recipe) => (
              <RecipeItem
                key={recipe.name}
                name={recipe.name}
                exp={recipe.ingridients}
                amount={recipe.amount}
              />
            ))}
          </div>
          <div className="Reccolumns">
            {testRecipeData.map((recipe) => (
              <RecipeItem
                key={recipe.name}
                name={recipe.name}
                exp={recipe.ingridients}
                amount={recipe.amount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipies;
