const { connect } = require('../Utils/mongoPool.js');
 
async function Helper(operation,object){
    const client = await connect();
    const db = await client.db("ZeroWaste")
    let chosenCollection = ""
    // if (object["useMockDB"] && object["useMockDB"]===true){
    //     chosenCollection = "Testing"
    // }
    // else{
    //     chosenCollection = "Ingredientss"
    // }
    chosenCollection = "Ingredients"
    if (operation == "Insert")
        await db.collection(chosenCollection).insertOne(object)
    else if (operation == "Update")
        await db.collection(chosenCollection).updateOne({"name": {$regex : object.name}}, {$set: object.updated})
    else if (operation == "Delete")
        await db.collection(chosenCollection).findOneAndDelete({"name":{$regex : object.name}}) 
    else if (operation == "Get"){
        return await db.collection(chosenCollection).findOne({"name": {$regex : object.name}})
    }   

    result = await db.collection(chosenCollection).findOne({"name": {$regex : object.name}}) 
    return result

}

async function insertIngredients(object){
    if (typeof(object) != "object" || object["name"] == null){
        return "Cannot Insert Ingredients"
    }
    return  Helper("Insert",object)
}

async function deleteIngredients(object){
    if (typeof(object) != "object" || object["name"] == null){
        return "Cannot Delete Ingredients"
    }
    return await Helper("Delete",object)
}

async function updateIngredients(object){ //will have the new modified fields but the SAME ID
    if (typeof(object) != "object" || object["name"] == null || object["updated"]==null){
        return "Cannot Update Ingredients"
    }
    return await Helper("Update",object)
}

async function getIngredients(object){
    if (typeof(object) != "object" || object["name"] == null){
        return "Cannot Get Ingredients"
    }
    return Helper("Get",object)
}


module.exports ={ //acount for null values after testing
    getIngredients, // works
    insertIngredients, //works
    deleteIngredients, //works
    updateIngredients, //works
}