//Restaurant API Methods for MongoDB
const restaurant_db = require('./restaurantsDB')

//Restaurant Library Methods 
const restaurant_lib = require('./restaurantlib')

//User API Methods for MongoDB
const users_db = require('./usersDB')

// Unique Identifier for Objects
const ObjectId = require('mongodb').ObjectId;

let testDB = async function(db_type){ //Test items to fill database
    //console.log(db,db_type);
    if (db_type == "Restaurants"){
        const masterObjectId = new ObjectId() //Used for all objectIds for testing purposes
        /*
        await restaurant_db.insertRestaurant({
            "_id": masterObjectId,
            "contact_info": {"owner": "John Smith" , "phone": "000-000-0000","email": "test@test.com",},
            "address": {"street": "", "city": "", "state": "", "zip": "", "country":""},
			"ingredients": [{"name": "Tomatoes", "TotalAmount":20, "minimum_needed": 200, "storage":[{"_id": new ObjectId(), "amount": 100, "shelf_life": new Date()}]}],
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
            "owner_id": masterObjectId,
			"contact_info": {"phone": "000-000-0000","email": "test@test.com",},
			"address": {"street": "", "city": "", "state": "", "zip": "", "country":""},
			"ingredients": [{"name": "Tomatoes", "TotalAmount":99, "minimum_needed": 100, "storage":[{"_id": new ObjectId(), "amount": 99, "shelf_life": new Date()}]}],
            "ingredients_expiring_soon":[],
            "ingredients_expired":[],
            "recipes": [{"name": "Pizza", "ingredients": [{"name": "Tomatoes", "amount": 5}],"daily_produced": 20, "surplus_created": 5}],
			"money_saved": 12000000,
			"is_food_claimed": false,
			"useMockDB":true
		}

        let updatedRestaurant = {
			"_id": masterObjectId,
			"contact_info": {"owner": "John Smith" , "phone": "000-000-0000","email": "test@test.com",},
			"address": {"street": "", "city": "", "state": "", "zip": "", "country":""},
			"ingredients": [{"name": "Tomatoes", "TotalAmount":20, "storage":[{"_id": new ObjectId(), "amount": 100, "shelf_life": new Date()}]}],
			"recipes": [{"name": "Pizza", "ingredients": [],"daily_produced": 20, "surplus_created": 5}],
            "ingredients_expiring_soon":[],
            "ingredients_expired":[],
			"money_saved": 12000,
			"is_food_claimed": false,
			"updated":{"money_saved": 0, "is_food_claimed": true, 			
                "recipes": [{"name": "Pizza", "ingredients": [],"daily_produced": 20, "surplus_created": 5}],},
			"useMockDB":true
		}
		let updateIngredients = {"name": "Tomatoes", "TotalAmount":200, "storage":[{"_id": new ObjectId(), "amount": 10, "shelf_life": new Date()},{"_id": new ObjectId(), "amount": 30, "shelf_life": "Wed Feb 22 2023 20:18:05 GMT-0500 (Eastern Standard Time)"},{"_id": new ObjectId(), "amount": 30, "shelf_life": "Wed Feb 5 2023 20:18:05 GMT-0500 (Eastern Standard Time)"}]}
		await users_db.insertUser(testOwner)
        await restaurant_db.insertRestaurant(Restaurant)
        let result = await restaurant_lib.getExpiringIngredients(Restaurant)
        //let result = await restaurant_lib.getExpiringIngredients(Restaurant)
		//let result = await restaurant_db.updateIngredients({"_id": masterObjectId,"useMockDB":true},updateIngredients )
        //let result = await restaurant_db.getRestaurant({"_id": masterObjectId, "useMockDB":true})
        console.log(result);
    }
    else if(db_type == "Recipes")
        db.collection(db_type).insertOne(
            {   "_id" : new ObjectId(), 
                "name" : "ExampleDish",
                "restaurant_id": new ObjectId(), 
                "ingredients": [{"name": "apple", "amount":5}, {"name": "pizza", "amount":3}], 
                "daily_produced": 20,
                "surplus_created": 5
            }
        )
    else if(db_type == "Ingredients")
        db.collection(db_type).insertOne(
            {   "_id" : new ObjectId(), 
                "restaurant_id": new ObjectId(), 
                "data": {
                    "name": "Apple",
                    "minimum_threshold":30,
                    "total_amount" : 10,
                    "current_package":{
                        "_id": new ObjectId(),
                        "shelf_life": Date(), 
                        "date_purchased": Date(), 
                        "quantity":5,
                    },
                    "storage":[{
                        "_id": new ObjectId(),
                        "shelf_life": Date(), 
                        "date_purchased": Date(), 
                        "quantity":10,
                    }]
                }
            }
        )
    else if(db_type == "Users"){
            const masterObjectId = new ObjectId() //Used for all objectIds for testing purposes
            let User = {   "_id" : masterObjectId, 
                "first_name": "Bob",
                "last_name": "Ross",
                "phone": "000-000-0000", 
                "email": "test@gmail.com", 
                "address": "1 Castle Point Rd", 
                "AccountType": "Restaurant",
                "useMockDB": true                 
            }
            let User2 = {
                "_id" : masterObjectId, 
                "first_name": "Bob",
                "last_name": "Ross",
                "phone": "000-000-0000", 
                "email": "test@gmail.com", 
                "address": "1 Castle Point Rd", 
                "AccountType": "Restaurant",
                "useMockDB": true,
                "updated": {"phone": "999-999-9999", "email": "blckwalk@gmail.com"}

            }
        await users_db.insertUser(User)
        await users_db.updateUser(User2)
    }
}

testDB("Restaurants")
