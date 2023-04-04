import React, { useContext,useEffect } from "react";
import { AuthorizeContext } from "../../Authorization/Authorize";
import { auth } from "../../Authorization/FirebaseConfig";
import './Recipies.css';
import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem.jsx";
import axios from 'axios';
import Landing from "../LandingPage/LandingPage";


import testRecipeData from "./testRecipeData";

const Recipies = () => {
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

  const onclickDel= (name) =>{
    alert(name);

   axios.delete('/routes/delete?ID='+name)
   .then((res)=>{
    console.log(res);
   })
   .catch((error)=>{
    console.log(error);
   })
}
if (!user) {
  return <Landing />;
}

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
            {testRecipeData.map(recipe => (
              <RecipeItem 
                onclick={onclickDel}
                key={recipe.name}
                name={recipe.name}
                exp ={recipe.ingridients}
                amount = {recipe.amount}

              />
            ))}
            </div>
            <div className="Reccolumns">
            {testRecipeData.map(recipe => (
              <RecipeItem
                key={recipe.name}
                name={recipe.name}
                exp ={recipe.ingridients}
                amount = {recipe.amount}

              />
            ))}
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default Recipies
