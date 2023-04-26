require('dotenv').config()
process.env.MONGO_URI = "mongodb+srv://Admin:vXtZ9j7tYBhjYIhM@zerowaste.ylulala.mongodb.net/test?retryWrites=true&w=majority"

const Rest_DB_API = require("../scripts/restaurantsDB")

// Unique Identifier for Objects
const ObjectId = require('mongodb').ObjectId;

const masterObjectId = new ObjectId() //Used for all objectIds for testing purposes

describe("Testing RestaurantDB API Features ", function() {
	let restaurant = {
		"_id": masterObjectId,
		"contact_info": {"owner": "John Smith" , "phone": "000-000-0000","email": "test@test.com",},
		"address": {"street": "", "city": "", "state": "", "zip": "", "country":""},
		"ingredients": [{"name": "Tomatoes", "TotalAmount":20, "storage":[{"_id": new ObjectId(), "amount": 100, "shelf_life": new Date()}]}],
		"recipes": [{"name": "Pizza", "ingredients": []}],
		"money_saved": 12000,
		"is_food_claimed": false,
		"useMockDB":true
	}


	beforeEach(function() { //increase jasmine test suite timeout
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
		

	});

	it("Get Restaurant", async function() { //testing Get Restaunant

		let result = await Rest_DB_API.insertRestaurant(restaurant)
		expect(result).toEqual(restaurant)
		Rest_DB_API.deleteRestaurant(restaurant)
	});

	it("Update Restaurant", async function() { //testing Update Restaunant
		let newMasterId = new ObjectId()
		let testRestaurant = {
			"_id": newMasterId,
			"contact_info": {"owner": "John Smith" , "phone": "000-000-0000","email": "test@test.com",},
			"address": {"street": "", "city": "", "state": "", "zip": "", "country":""},
			"ingredients": [{"name": "Tomatoes", "TotalAmount":20, "storage":[{"_id": masterObjectId, "amount": 100, "shelf_life": new Date()}]}],
			"recipes": [{"name": "Pizza", "ingredients": [{"name":"Tomatoes", "amount":20}]}],
			"money_saved": 12000,
			"is_food_claimed": false,
			"useMockDB":true
		}
		let updatedRestaurant = {
			"_id": newMasterId,
			"contact_info": {"owner": "John Smith" , "phone": "000-000-0000","email": "test@test.com",},
			"address": {"street": "", "city": "", "state": "", "zip": "", "country":""},
			"ingredients": [{"name": "Tomatoes", "TotalAmount":20, "storage":[{"_id": masterObjectId, "amount": 100, "shelf_life": new Date()}]}],
			"recipes": [{"name": "Pizza", "ingredients": [{"name":"Tomatoes", "amount":20}]}],
			"money_saved": 0,
			"is_food_claimed": true,
			"useMockDB":true
		}
			
		await Rest_DB_API.insertRestaurant(testRestaurant)

		testRestaurant["updated"] = {"money_saved": 0, "is_food_claimed": true}

		let result = await Rest_DB_API.updateRestaurant(testRestaurant)
		expect(result).toEqual(updatedRestaurant)
		await Rest_DB_API.deleteRestaurant(testRestaurant)

	});
	
	it("Delete Restaurant", async function() { //testing Delete Restaunant
		await Rest_DB_API.insertRestaurant(restaurant)
		let result = await Rest_DB_API.deleteRestaurant(restaurant)
		expect(result).toEqual(undefined)
	});



	
});



    