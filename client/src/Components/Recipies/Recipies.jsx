import React, { useContext, useEffect, useState } from "react";
import "./Recipies.css";
import { Link, useNavigate } from "react-router-dom";
import RecipeItem from "./RecipeItem.jsx";
import { auth } from "../../Authorization/FirebaseConfig";
import axios from "axios";
import { AuthorizeContext } from "../../Authorization/Authorize";

const Recipies = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentUserUid, setCurrentUserUid] = useState("");

  const navigate = useNavigate();

  const { user } = useContext(AuthorizeContext);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }

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

  const handleDelete = (uid, id) => {
    axios
      .delete(`http://localhost:3001/recipe/${uid}/${id}`)
      .then((response) => {
        if (response.status === 200) {
          const newRecipes = recipes.filter((recipe) => recipe._id !== id);
          setRecipes(newRecipes);
        } else {
          console.log("Delete request failed.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                numberOfUnits={recipe.numberOfUnits}
                _id={recipe._id}
                currentUserUid={currentUserUid}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipies;
