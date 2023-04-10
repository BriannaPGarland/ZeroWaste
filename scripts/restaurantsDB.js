const { connect } = require('../Utils/mongoPool.js');
 


/// Below are the restaurant ASYNC functions that have CRUD Database functions
async function Helper(operation,object){ //Master CRUD Handler
    const client = await connect();
    const db = await client.db("ZeroWaste")
    let chosenCollection = ""
    // if (object["useMockDB"] && object["useMockDB"]===true){
    //     chosenCollection = "Testing"
    // }
    // else{
    //     chosenCollection = "Restaurants"
    // }
	chosenCollection = "Testing"
    if (operation == "Insert")
        await db.collection(chosenCollection).insertOne(object)
    else if (operation == "Update")
        await db.collection(chosenCollection).updateOne({"_id": object._id}, {$set: object.updated})
    else if (operation == "Delete")
        await db.collection(chosenCollection).findOneAndDelete({"_id":object._id}) 
     
    result = await db.collection(chosenCollection).findOne({"_id": object._id}) 
    return result
}

async function insertRestaurant(object){
    if (typeof(object) != "object" || object["_id"] == null){
        return "Cannot Insert Restaurant"
    }
    return  Helper("Insert",object)
}

async function deleteRestaurant(object){
    if (typeof(object) != "object" || object["_id"] == null){
        return "Cannot Delete Restaurant"
    }
    return await Helper("Delete",object)
}

async function updateRestaurant(object){ //will have the new modified fields but the SAME ID
    if (typeof(object) != "object" || object["_id"] == null || object["updated"]==null){
        return "Cannot Update Restaurant"
    }
    return await Helper("Update",object)
}

async function getRestaurant(object){
    if (typeof(object) != "object" || object["_id"] == null){
        return "Cannot Get Restaurant"
    }
    return Helper("Get",object)
}

async function getIngredients(object){
    let restaurant = await getRestaurant(object)
    if (typeof(restaurant) != "object"){
        return "Restaurant does not exist"
    }
    return restaurant.ingredients
}

async function getRecipes(object){
    let restaurant = await getRestaurant(object)
    if (typeof(restaurant) != "object"){
        return "Restaurant does not exist"
    }
    return restaurant.recipes
}

async function updateIngredients(object, updateIngredient){
    let Ingredients = await getIngredients(object)
    if (!Array.isArray(Ingredients) || typeof(updateIngredient) != "object"){
        return "Restaurant does not exist"
    }
    //Restaurant Library Methods 
    let  restaurant_lib = require('./restaurantlib')
    for (let i = 0; i < Ingredients.length; i++) {
        if (Ingredients[i].name == updateIngredient.name){
			Ingredients[i] = updateIngredient
            Ingredients[i].storage = await restaurant_lib.sortStorageByShelfLife(Ingredients[i].storage)
            break;
        }
    }
    let newObj = {"_id": object._id, "updated": {"ingredients":Ingredients}}
    return updateRestaurant(newObj)
}

async function updateRecipes(object, updatedRecipe){
    let Recipes = await getRecipes(object)
    if (!Array.isArray(Recipes) || typeof(updatedRecipe) != "object"){
        return "Restaurant does not exist"
    }
    for (let i = 0; i < Recipes.length; i++){
        if (Recipes[i].name == updatedRecipe.name){
            Recipes[i] = updatedRecipe
            break;
        }
    }
    let newObj = {"_id": object._id, "updated": {"recipes":Recipes}}
    return updateRestaurant(newObj)
}

async function insertIngredients(object,newIngredient){
    let Ingredients = await getIngredients(object)
    if (!Array.isArray(Ingredients)|| typeof(newIngredient) != "object"){
        return "Restaurant does not exist"
    }
    Ingredients.push(newIngredient)
    let newObj = {"_id": object._id, "updated": {"ingredients":Ingredients}}
    return updateRestaurant(newObj)
}

async function insertRecipes(object, newRecipe){
    let Recipes = await getRecipes(object)
    if (!Array.isArray(Recipes) || typeof(newRecipe) != "object"){
        return "Restaurant does not exist"
    }
    Recipes.push(newRecipe)
    let newObj = {"_id": object._id, "updated": {"recipes":Recipes}}
    return updateRestaurant(newObj)
}

async function deleteIngredients(object,IngredientName){
    let Ingredients = await getIngredients(object)
    if (!Array.isArray(Ingredients)|| typeof(IngredientName) != "string"){
        return "Restaurant does not exist"
    }
    Ingredients = Ingredients.filter( each => each.name !=IngredientName)
    let newObj = {"_id": object._id, "updated": {"ingredients":Ingredients}}
    return updateRestaurant(newObj)
}

async function deleteRecipes(object, RecipeName){
    let Recipes = await getRecipes(object)
    if (!Array.isArray(Recipes)|| typeof(RecipeName) != "string"){
        return "Restaurant does not exist"
    }
    Recipes = Recipes.filter( each => each.name !=RecipeName)
    let newObj = {"_id": object._id, "updated": {"recipes":Recipes}}
    return updateRestaurant(newObj)
}

async function updateExpiringIngredients(object){
    let restaurant = await getRestaurant(object)
    if (typeof(restaurant) != "object"){
        return "Restaurant does not exist"
    }
    let newObj = {"_id": object._id, "updated": {
            "ingredients_expiring_soon":object["ingredients_expiring_soon"], 
            "ingredients_expired": object["ingredients_expired"],
            "ingredients": object["ingredients"]
        }
    }
    return updateRestaurant(newObj)

}


module.exports ={ //acount for null values after testing
    getRestaurant, // works
    insertRestaurant, //works
    deleteRestaurant, //works
    updateRestaurant, //works

    getIngredients, //works
    updateIngredients,//works
    insertIngredients, //works
    deleteIngredients, //works

    getRecipes, //works
    updateRecipes,//works
    insertRecipes,//works
    deleteRecipes,//works

    updateExpiringIngredients

}