const { connect } = require('../Utils/mongoPool.js');
 
async function Helper(operation,object){
    const client = await connect();
    const db = await client.db("ZeroWaste")
    let chosenCollection = ""
    if (object["useMockDB"] && object["useMockDB"]===true){
        chosenCollection = "Testing"
    }
    else{
        chosenCollection = "Restaurants"
    }
    if (operation == "Insert")
        await db.collection(chosenCollection).insertOne(object)
    else if (operation == "Update")
        await db.collection(chosenCollection).updateOne({"_id": object._id}, {$set: object.updated})
    else if (operation == "Delete")
        await db.collection(chosenCollection).findOneAndDelete({"_id":object._id}) 
    else if (operation == "Get"){
        return await db.collection(chosenCollection).findOne({"_id": object._id})
    }   

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
    for (let i = 0; i < Ingredients.length; i++) {
        if (Ingredients[i].data.name == updateIngredient.name){
            Ingredients[i].data = updateIngredient
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
        if (Recipes[i].data.name == updatedRecipe.name){
            Recipes[i].data = updatedRecipe
            break;
        }
    }
    let newObj = {"_id": object._id, "updated": {"recipes":Recipes}}
    return updateRestaurant("Update",newObj)
}

async function insertIngredients(object,newIngredient){
    let Ingredients = await getIngredients(object)
    if (!Array.isArray(Ingredients)|| typeof(newIngredient) != "object"){
        return "Restaurant does not exist"
    }
    Ingredients.push(newIngredient)
    let newObj = {"_id": object._id, "updated": {"ingredients":Ingredients}}
    return updateRestaurant("Update",newObj)

}

async function insertRecipes(object, newRecipe){
    let Recipes = await getRecipes(object)
    if (!Array.isArray(Recipes) || typeof(newRecipe) != "object"){
        return "Restaurant does not exist"
    }
    Recipes.push(newRecipe)
    let newObj = {"_id": object._id, "updated": {"recipes":Recipes}}
    return updateRestaurant("Update",newObj)
}

async function deleteIngredients(object,IngredientName){
    let Ingredients = await getIngredients(object)
    if (!Array.isArray(Ingredients)|| typeof(IngredientName) != "string"){
        return "Restaurant does not exist"
    }
    Ingredients = Ingredients.filter( each => each.data.name !=IngredientName)
    let newObj = {"_id": object._id, "updated": {"ingredients":Ingredients}}
    return updateRestaurant("Update",newObj)
}

async function deleteRecipes(object, RecipeName){
    let Recipes = await getRecipes(object)
    if (!Array.isArray(Recipes)|| typeof(IngredientName) != "string"){
        return "Restaurant does not exist"
    }
    Recipes = Recipes.filter( each => each.data.name !=RecipeName)
    let newObj = {"_id": object._id, "updated": {"recipes":Recipes}}
    return updateRestaurant("Update",newObj)
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
    deleteRecipes//works
}