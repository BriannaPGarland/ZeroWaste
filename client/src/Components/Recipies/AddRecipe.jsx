import React from 'react'
import './Recipies.css';
import { Link } from 'react-router-dom';
import Ingriedient from './Ingriedient.jsx'

const AddRecipe = () => {
  
  return (
    <div className="addInvPage">
			<div className="title">
        Add Recipe 
      </div>
			
      <input type="text" className="invInput" placeholder="Name of Recipe"></input>
      <input type="text" className="invInput" placeholder="How Many Orders Do You Make In One Day? "></input>
      <div className="ingtext">Ingriedients</div>
    <Ingriedient></Ingriedient>
    <Ingriedient></Ingriedient>
    <Ingriedient></Ingriedient>
    <button className ="NewIngriedient">
        Add New Ingridient
    </button>
      <Link className="SaveRecipe" to="/Recipies">
          			Save Recipe
      </Link>
    </div>
  )
}

export default AddRecipe