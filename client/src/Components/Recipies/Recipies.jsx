import React, { useEffect, useState } from "react";
import "./Recipies.css";
import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem.jsx";
import { auth } from "../../Authorization/FirebaseConfig";
import axios from "axios";

const Recipies = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentUserUid, setCurrentUserUid] = useState("");

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const uid = currentUser.uid;
      setCurrentUserUid(uid);

      axios
        .get(`http://localhost:3001/recipe/${uid}`)
        .then((res) => {
          setRecipes(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return (
    <div className="recipePage">
      <h1 className="title">Recipes</h1>
      <div className="buttonSec">
        <Link className="AddNewButt" to="/AddRecipe">
          Add New
        </Link>
        <div className="ListRecipes">
          <div className="Reccolumns">
            {recipes.map((recipe) => (
              <RecipeItem
                key={recipe._id}
                name={recipe.name}
                ingredients={recipe.ingredients}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipies;
