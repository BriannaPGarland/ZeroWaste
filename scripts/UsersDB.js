const { connect } = require('../Utils/mongoPool.js');
 
async function Helper(operation,object){
    const client = await connect();
    const db = await client.db("ZeroWaste")
    let chosenCollection = ""
    // if (object["useMockDB"] && object["useMockDB"]===true){
    //     chosenCollection = "Testing"
    // }
    // else{
    //     chosenCollection = "Users"
    // }
    chosenCollection = "Users"
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

async function insertUser(object){
    if (typeof(object) != "object" || object["_id"] == null){
        return "Cannot Insert User"
    }
    return  Helper("Insert",object)
}

async function deleteUser(object){
    if (typeof(object) != "object" || object["_id"] == null){
        return "Cannot Delete User"
    }
    return await Helper("Delete",object)
}

async function updateUser(object){ //will have the new modified fields but the SAME ID
    if (typeof(object) != "object" || object["_id"] == null || object["updated"]==null){
        return "Cannot Update User"
    }
    return await Helper("Update",object)
}

async function getUser(object){
    if (typeof(object) != "object" || object["_id"] == null){
        return "Cannot Get User"
    }
    return Helper("Get",object)
}


module.exports ={ //acount for null values after testing
    getUser, // works
    insertUser, //works
    deleteUser, //works
    updateUser, //works
}