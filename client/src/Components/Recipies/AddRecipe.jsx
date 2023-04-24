import React, { useState, useEffect, useContext } from "react";
import "./Recipies.css";
import axios from "axios";
import { auth } from "../../Authorization/FirebaseConfig";
import { AuthorizeContext } from "../../Authorization/Authorize";
import Landing from "../LandingPage/LandingPage";

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  // const [ setUser] = useState(null);

  const { user } = useContext(AuthorizeContext);


  useEffect(() => {
    // alert(localStorage.getItem("user"));
    auth.onAuthStateChanged((user) => {
     
      if (user) {
        // User is signed in.
       // alert('User is signed in:'+ user)
        console.log('User is signed in:', user);
      //   const user = jwt(); // decode your token here
       localStorage.setItem('user', user.uid);
      } else {
        // No user is signed in.
        //alert('No user is signed in.')
        console.log('No user is signed in.');
       // window.location.href = '/login';
      }
    });
  }, []);

  if (!user) {
    return <Landing />;
  }

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  //   return () => unsubscribe();
  // }, []);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", numberOfUnits: "" }]);
  };

  const handleIngredientChange = (event, index, field) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = event.target.value;
    setIngredients(newIngredients);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user) {
      console.log("User not authenticated!");
      return;
    }

    const data = {
      name: name,
      ingredients: ingredients.filter((ingredient) => ingredient.name !== ""),
      uid: user.uid,
    };

    try {
      await axios.post("http://localhost:3001/recipe", data);
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

        <button className="SaveRecipe" type="submit">
          Save Recipe
        </button>
      </form>
      {/* Please keep this outside the form @Bri. I couldnt figure out a right place to keep this button. U had fixed this. 
      Pls fix it again */}
      <button className="NewIngriedient" onClick={handleAddIngredient}>
        Add New Ingredient
      </button>
    </div>
  );
};

export default AddRecipe;
