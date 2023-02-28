const restaurant_db = require('./RestaurantsDB')

// Unique Identifier for Objects
const ObjectId = require('mongodb').ObjectId;

//MongoClient
const MongoClient = require('mongodb').MongoClient;

// server location
const url = 'mongodb://0.0.0.0:27017/';

//Init MongoClient
MongoClient.connect(url).then((client) => {      
    // database name
    const db =  client.db("ZeroWasteDB");
    populateDB(db,"Restaurants")
})


let populateDB = async function(db,db_type){ //Test items to fill database
    //console.log(db,db_type);
    if (db_type == "Restaurants"){
        restaurant_db.Helper("Insert", {
            "contact_info": {"owner": "John Smith" , "phone": "000-000-0000","email": "test@test.com",},
            "address": {"street": "", "city": "", "state": "", "zip": "", "country":""},
            "ingredients": ["Test"],
            "recipes": ["one"],
            "money_saved": 12000,
            "is_food_claimed": false,
        })
       // restaurant_db("Delete",{_id: new ObjectId("63fc343bfc34ed0474a4f19a")} )
        //let result =  await restaurant_db.getIngredients(new ObjectId("63fe546d4e7664aef7f40a5e"));
        let obj = { "_id": new ObjectId("63fe546d4e7664aef7f40a5e")}
        //dlet result =  await restaurant_db.getRecipes();

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

