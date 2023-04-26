//Restaurant API Methods for MongoDB
const restaurant_db = require('./restaurantsDB')

//Restaurant Library Methods 
const restaurant_lib = require('./restaurantlib')

//User API Methods for MongoDB
const users_db = require('./usersDB')

// Unique Identifier for Objects
const ObjectId = require('mongodb').ObjectId;


let testDB = async function(){ //Test items to fill database
    //console.log(db,db_type);
    const masterObjectId = new ObjectId() //Used for all objectIds for testing purposes
    /*
    await restaurant_db.insertRestaurant({
        "_id": masterObjectId,
        "contact_info": {"owner": "John Smith" , "phone": "000-000-0000","email": "test@test.com",},
        "address": {"street": "", "city": "", "state": "", "zip": "", "country":""},
        "ingredients": [{"name": "Tomatoes", "TotalAmount":20, "minimum_needed": 200, "storage":[{"_id": new ObjectId(), "amount": 100, "expire_date": new Date()}]}],
        "ingredients_expiring_soon":[],
        "ingredients_expired":[]
        "recipes": [{"name": "Pizza", "ingredients": [{"name": "Cheese", "amount": 5}],"daily_produced": 20, "surplus_created": 5}],},
        "money_saved": 12000,
        "time_of_last_food_alert": new Date(),
        "is_food_claimed": false,
        "useMockDB":true
    })*/
    // restaurant_db("Delete",{_id: new ObjectId("63fc343bfc34ed0474a4f19a")} )
    //let result =  await restaurant_db.getIngredients(new ObjectId("63fe546d4e7664aef7f40a5e"));
    //let obj = { "_id": new ObjectId("63ffda769c9384f917cbc006")}
    //dlet result =  await restaurant_db.getRecipes();
    // newIngredient = {"_id" : new ObjectId(), "data": {"name": "TestORANGE", "amount": 10, "Expiration": new Date()}}
    //let updateingredient = {"name": "TestORANGE", "amount": 10, "Expiration": new Date()}
    //let newRecipe = {"_id" : new ObjectId(), "data": {"name": "Test","amount":200}}
    //let updateRecipe = {"name": "Test","amount":100, "Surplus": 20}
    
    let testOwner = {
        "_id" : masterObjectId,
        "name" : {"first_name": "Femi","last_name": "F",},
        "contact_info": {"phone": "848-239-9086","email": "femirocks123@gmail.com",},
        "address": {"street": "1 CastlePoint Rd", "city": "Hoboken", "state": "NJ", "zip": "07030", "country":"USA"},
        "accountType": "Restaurant",
        "restaurant_id": masterObjectId,
        "beneficiary_id": masterObjectId
    }
    
    let Restaurant = {
        "_id": masterObjectId,
        name: "WENDYS",
        uid:masterObjectId,
        "owner_id": masterObjectId,
        "contact_info": {"phone": "000-000-0000","email": "test@test.com",},
        "address": {"street": "", "city": "", "state": "", "zip": "", "country":""},
        "ingredients": [], //{"name": "Tomatoes", "TotalAmount":99, "minimum_needed": 100, "storage":[{"_id": new ObjectId(), "amount": 99, "expire_date": new Date()}]}
        "ingredients_expiring_soon":[],
        "ingredients_expired":[],
        "recipes": [{"name": "Pizza", "ingredients": [{"name": "Tomatoes", "amount": 5}],"daily_produced": 20, "surplus_created": 5}],
        "money_saved": 12000000,
        "total_donations":0,
        "is_food_claimed": false,
        "useMockDB":true
    }

    let updatedRestaurant = {
        "_id": masterObjectId,
        "contact_info": {"owner": "John Smith" , "phone": "000-000-0000","email": "test@test.com",},
        "address": {"street": "", "city": "", "state": "", "zip": "", "country":""},
        "ingredients": [{"name": "Tomatoes", "shelf_life_type": "shelf", minimum_needed: 100, "TotalAmount":200, "storage":[{"_id": new ObjectId(), "amount": 10, "expire_date": null}]}],
        "recipes": [{"name": "Pizza", "ingredients": [],"daily_produced": 20, "surplus_created": 5}],
        "ingredients_expiring_soon":[],
        "ingredients_expired":[],
        "money_saved": 12000,
        "is_food_claimed": false,
        "updated":{"money_saved": 0, "is_food_claimed": true, 			
            "recipes": [{"name": "Pizza", "ingredients": [],"daily_produced": 20, "surplus_created": 5}],},
        "useMockDB":true
    }
    let updateIngred = {"name": "Tomatoes", "shelf_life_type": "shelf", "TotalAmount":200, "storage":[{"_id": new ObjectId(), "amount": 10, "expire_date": null}]}
    await users_db.insertUser(testOwner)
    await restaurant_db.insertRestaurant(Restaurant)
    // let result = await restaurant_lib.getExpiringIngredients(Restaurant)
    //let result = await restaurant_lib.getExpiringIngredients(Restaurant)
    await restaurant_db.insertIngredients({"_id": masterObjectId},updateIngred )
    //updateIngred = {"name": "Tomatoes", "shelf_life_type": "freezer", bundle: {_id: masterObjectId, amount: 20, expire_date: null}}
    //let result = await restaurant_db.updateIngredients({"_id": masterObjectId}, updateIngred)
    //console.log(result);
    
    // updateIngred = {"name": "Tomatoes", "TotalAmount":500, "storage":[{"_id": new ObjectId(), "amount": 10, "expire_date": new Date()},{"_id": new ObjectId(), "amount": 30, "expire_date": "Wed Feb 22 2023 20:18:05 GMT-0500 (Eastern Standard Time)"},{"_id": new ObjectId(), "amount": 30, "expire_date": "Wed Feb 5 2023 20:18:05 GMT-0500 (Eastern Standard Time)"}]}
    // result = await restaurant_db.updateIngredients(Restaurant, updateIngred)
    let result = await restaurant_db.getRestaurant({"_id": masterObjectId, "useMockDB":true})
    console.log(result);
    //restaurant_db.deleteRestaurant(Restaurant)
    //users_db.deleteUser(testOwner)
    //test your expire date function thing but we need to account for storage or it wont work properly
 
}

testDB()
