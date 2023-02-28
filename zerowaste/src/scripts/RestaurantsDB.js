const MongoClient = require('mongodb').MongoClient;
const server_url = 'mongodb://0.0.0.0:27017/';
const ObjectId = require('mongodb').ObjectId;


 function Helper(operation,object){
    return  MongoClient.connect(server_url).then((client) => {
        return client.db("ZeroWasteDB")
    }).then( (db) =>{
        if (operation == "Insert")
            insertRestaurant(db,object)
        else if (operation == "Update")
            updateRestaurant(db,object)
        else if (operation == "Delete")
            deleteRestaurant(db,object)
        else if (operation == "Get"){
            return getRestaurant(db,object)
        }
        
    })


       
    
}

async function insertRestaurant(db,object){
    await db.collection("Restaurants").insertOne(object)
}

async function deleteRestaurant(db,object){
    await db.collection("Restaurants").findOneAndDelete({"_id":object._id}) 
}

async function updateRestaurant(db,object){ //will have the new modified fields but the SAME ID
    await db.collection("Restaurants").updateOne({"_id": object._id}, {$set: object.updated}) //
}

async function getRestaurant(db,object){
   return await db.collection("Restaurants").findOne({"_id": object._id})
}

async function getIngredients(object){
    let restaurant = await Helper("Get", object)
    return restaurant.ingredients
}

async function getRecipes(object){
    let restaurant = await Helper("Get", object)
    return restaurant.recipes
}

async function updateIngredients(object, updateIngredient){
    let Ingredients = await getIngredients(object)
    Ingredients.push(newIngredient)
}

async function updateRecipes(object, updatedRecipe){

}

async function insertIngredients(object,newIngredient){
    let Ingredients = await getIngredients(object)
    Ingredients.push(newIngredient)
    let newObj = {"_id": object._id, "updated": {"ingredients":Ingredients}}
    Helper("Update",newObj)

}

async function insertRecipes(object, newRecipe){
    let Recipes = await getIngredients(object)
    Recipes.push(newRecipe)
    let newObj = {"_id": object._id, "updated": {"Recipes":Recipes}}
    Helper("Update",newObj)
}

async function deleteIngredients(object,IngredientName){


}

async function deleteRecipes(object, RecipeName){

}


module.exports ={Helper , getIngredients, getRecipes}
