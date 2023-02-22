
// Unique Identifier for Objects
const ObjectId = require('mongodb').ObjectId;

//MongoClient
const MongoClient = require('mongodb').MongoClient;

// server location
const url = 'mongodb://0.0.0.0:27017/';

//Init MongoClient
MongoClient.connect(url).then((client) => {      
    // database name
    const db = client.db("ZeroWasteDB");
    const Collections = ["Restaruants","Recipes", "Ingredients" , "Accounts"] //Create collections for every item
    Collections.forEach(c => {
        createCollection(db,c) //Adds it to the DB
        populateDB(db,c) //Populates it with the test items
    })
})

let createCollection = async function(db,db_type){
    await db.createCollection(db_type);
}


let populateDB = async function(db,db_type){ //Test items to fill database
    //console.log(db,db_type);
    if (db_type == "Restaruants")
        db.collection(db_type).insertOne(
        {   "_id" : new ObjectId(), 
            "phone": "000-000-0000", 
            "email": "test@gmail.com", 
            "address": "1 Castle Point Rd", 
            "inventory": [{   "_id" : new ObjectId(), 
                "restaurant_id": new ObjectId(), 
                "data": {
                    "name": "Apple",
                    "minimum_threshold":0000,
                    "current_package":{
                        "_id": new ObjectId(),
                        "shelf_life": Date(), 
                        "date_purchased": Date(), 
                        "quantity":0000,
                    },
                    "storage":[{
                        "_id": new ObjectId(),
                        "shelf_life": Date(), 
                        "date_purchased": Date(), 
                        "quantity":0000,
                    }]
                }
            },
        {   "_id" : new ObjectId(), 
                "restaurant_id": new ObjectId(), 
                "data": {
                    "name": "Apple",
                    "minimum_threshold":0000,
                    "current_package":{
                        "_id": new ObjectId(),
                        "shelf_life": Date(), 
                        "date_purchased": Date(), 
                        "quantity":0000,
                    },
                    "storage":[{
                        "_id": new ObjectId(),
                        "shelf_life": Date(), 
                        "date_purchased": Date(), 
                        "quantity":0000,
                    }]
                }
            }],
            "recipes": [{   "_id" : new ObjectId(), 
                "name" : "ExampleDish",
                "restaurant_id": new ObjectId(), 
                "ingredients": [{"name": "apple", "amount":5}, {"name": "pizza", "amount":3}], 
                "daily_produced": 0000,
                "surplus_created": 0000
            },
        {   "_id" : new ObjectId(), 
                "name" : "ExampleDish",
                "restaurant_id": new ObjectId(), 
                "ingredients": [{"name": "apple", "amount":5}, {"name": "pizza", "amount":3}], 
                "daily_produced": 0000,
                "surplus_created": 0000
            }], 
            "money_saved":0000,
            "is_food_claimed": false,
            "owner_id": new ObjectId(),
        }
    )
    else if(db_type == "Recipes")
        db.collection(db_type).insertOne(
            {   "_id" : new ObjectId(), 
                "name" : "ExampleDish",
                "restaurant_id": new ObjectId(), 
                "ingredients": [{"name": "apple", "amount":5}, {"name": "pizza", "amount":3}], 
                "daily_produced": 0000,
                "surplus_created": 0000
            }
        )
    else if(db_type == "Ingredients")
        db.collection(db_type).insertOne(
            {   "_id" : new ObjectId(), 
                "restaurant_id": new ObjectId(), 
                "data": {
                    "name": "Apple",
                    "minimum_threshold":0000,
                    "current_package":{
                        "_id": new ObjectId(),
                        "shelf_life": Date(), 
                        "date_purchased": Date(), 
                        "quantity":0000,
                    },
                    "storage":[{
                        "_id": new ObjectId(),
                        "shelf_life": Date(), 
                        "date_purchased": Date(), 
                        "quantity":0000,
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