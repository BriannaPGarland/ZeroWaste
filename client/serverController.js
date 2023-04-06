import axios from "axios";
const BASE_URL = "/api";


let addRecipe = async (recipe) => {
  const data = {
    name: recipe.name,
    servings: recipe.servings,
    ingredients: recipe.ingredients,
  };
  let response = await axios.post(BASE_URL + "/recipes/", data);
  //console.log(response)
  return response.data;
};

let exports = {
  addRecipe,
};

export default exports;
