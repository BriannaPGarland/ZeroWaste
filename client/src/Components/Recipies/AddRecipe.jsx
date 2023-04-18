
import React, { useState } from "react";
import "./Recipies.css";
import { Link } from "react-router-dom";
import Ingriedient from "./Ingriedient.jsx";
import axios from "axios";



const AddRecipe = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", numberOfUnits: "" }]);
    console.log("Handle Add Ingridient clicked");
  };

  const handleIngredientChange = (event, index, field) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = event.target.value;
    setIngredients(newIngredients);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Handle Add Recipe clicked");

    const data = {
      name: name,
      ingredients: ingredients.filter((ingredient) => ingredient.name !== ""),
    };

    try {
      await axios.post("http://localhost:3001/recipes", data);
      console.log("Recipe added successfully!");
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  return (
    <div className="addInvPage">
      <div className="Rectitle">Add Recipe</div>


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="recTitle"
          placeholder="Name of Recipe"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <div className="ingtext">Ingredients</div>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              className="recInput"
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(event) => handleIngredientChange(event, index, "name")}
            />
            <input
              type="text"
              className="recInput"
              placeholder="Number of Units"
              value={ingredient.numberOfUnits}
              onChange={(event) =>
                handleIngredientChange(event, index, "numberOfUnits")
              }
            />
          </div>
        ))}
        <button className="NewIngriedient" onClick={handleAddIngredient}>
           Add New Ingredient
        </button>
        <button className="SaveRecipe" type="submit">
          Save Recipe
        </button>
      </form>
      
    </div>
  );
};

export default AddRecipe;
