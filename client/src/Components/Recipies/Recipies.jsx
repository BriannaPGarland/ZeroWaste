import React from 'react'
import './Recipies.css';
import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem.jsx";

const Recipies = () => {
  return (
    <div>
      <h1 class="title">
					Recipies
			</h1>
      <div className="buttonSec">
          <Link className="AddNewButt" to="/AddRecipe">
            Add New
          </Link>
          <div className="ListRecipes">
            <div className="Reccolumns">
              <RecipeItem></RecipeItem>
              <RecipeItem></RecipeItem>
              <RecipeItem></RecipeItem>
              <RecipeItem></RecipeItem>
              <RecipeItem></RecipeItem>
              <RecipeItem></RecipeItem>
            </div>
            <div className="Reccolumns">
              <RecipeItem></RecipeItem>
              <RecipeItem></RecipeItem>
              <RecipeItem></RecipeItem>
              <RecipeItem></RecipeItem>
              <RecipeItem></RecipeItem>
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default Recipies
