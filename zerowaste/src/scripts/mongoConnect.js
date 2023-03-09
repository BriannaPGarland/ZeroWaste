//Restaurant API Methods for MongoDB
const restaurant_db = require('./restaurantsDB')

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
            "ingredients": [{"_id" : masterObjectId, "data": {"name": "TestORANGE", "amount":20}}],
            "recipes": [{"_id" : masterObjectId, "data": {"name": "TestPIE", "amount":2}}],
            "money_saved": 12000,
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
        let Restaurant = {
			"_id": masterObjectId,
			"contact_info": {"owner": "John Smith" , "phone": "000-000-0000","email": "test@test.com",},
			"address": {"street": "", "city": "", "state": "", "zip": "", "country":""},
			"ingredients": [{"_id" : masterObjectId, "data": {"name": "TestORANGE", "amount":20}}],
			"recipes": [{"_id" : masterObjectId, "data": {"name": "TestPIE", "amount":2}}],
			"money_saved": 12000000,
			"is_food_claimed": false,
			"useMockDB":true
		}

        let updatedRestaurant = {
			"_id": masterObjectId,
			"contact_info": {"owner": "John Smith" , "phone": "000-000-0000","email": "test@test.com",},
			"address": {"street": "", "city": "", "state": "", "zip": "", "country":""},
			"ingredients": [{"_id" : masterObjectId, "data": {"name": "TestORANGE", "amount":20}}],
			"recipes": [{"_id" : masterObjectId, "data": {"name": "TestPIE", "amount":2}}],
			"money_saved": 12000,
			"is_food_claimed": false,
			"updated":{"money_saved": 0, "is_food_claimed": true},
			"useMockDB":true
		}
		
		await restaurant_db.insertRestaurant(Restaurant)
		let result = await restaurant_db.updateRestaurant(updatedRestaurant)
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
    else if(db_type == "Accounts")
        db.collection(db_type).insertOne(
            {   "_id" : new ObjectId(), 
                "first_name": "Bob",
                "last_name": "Ross",
                "phone": "000-000-0000", 
                "email": "test@gmail.com", 
                "address": "1 Castle Point Rd", 
                "AccountType": "Restaurant",                 
            }
        )
}

testDB("Restaurants")
