//Restaurant CRUD Methods for MongoDB
let restaurant_db = require('./restaurantsDB')

//Users CRUD methods
let userDB = require('./usersDB')

//Notification Library
let notify = require('./notify')

async function sortStorageByShelfLife(Storage) {//ascending
    Storage.sort((a, b) => {
      let dateA = new Date(a.shelf_life);
      let dateB = new Date(b.shelf_life);
      return dateA - dateB;
    });
    return Storage;
}

async function consumeIngredients(RestaurantObj, name, amount){
	let ingredients = await restaurant_db.getIngredients(RestaurantObj)
	if (!Array.isArray(ingredients)|| typeof(name) != "string" || typeof(amount) != "number"){
        return "Restaurant does not exist or name/amount was not provided"
    }
	let foundIngredient = false;
  	for (let i = 0; i < ingredients.length; i++) {
    	let ingredient = ingredients[i];
		if (ingredient.name === name && ingredient.TotalAmount >= amount) {
			foundIngredient = true;
			let totalAmount = ingredient.TotalAmount - amount;
			let storage = ingredient.storage;
			for (let j = 0; j < storage.length && amount > 0; j++) {
				let bundle = storage[j];
				let bundleAmount = bundle.amount;
				if (amount >= bundleAmount) { //This wont even have to do date parsing for consuming
					amount -= bundleAmount;
					storage.splice(j, 1);
					j--;
				} else {
					bundle.amount -= amount;
					amount = 0;
				}
			}
			if (amount === 0) {
				let updatedIngredient = { name: name, TotalAmount: totalAmount, storage: storage };
				return await restaurant_db.updateIngredients(restaurant, updatedIngredient);
			}
		}
	}
	if (!foundIngredient) {
		return "Ingredient not found";
	} 
	else {
		return "Insufficient amount";
	}
}


async function getExpiringIngredients(RestaurantObj){//Returns everything expiring in 72 Hours, Runs once a day
	let restaurant = await restaurant_db.getRestaurant(RestaurantObj)
	let ingredients = restaurant.ingredients
    let expiring_soon = []
	let expired = [];

    let currentDate = Date.parse(new Date());
    for (let i = 0; i < ingredients.length; i++) {
        let ingredient = ingredients[i];
        let storage = ingredient.storage;

        for (let j = 0; j < storage.length; j++) {
            let bundle = storage[j];
            let shelfLife = Date.parse(bundle.shelf_life);

            // Calculate difference in days between today and shelf life
            let timeDiff = shelfLife - currentDate;
            let diffInDays = Math.round(timeDiff / (1000 * 3600 * 24));
			if (diffInDays<= 0){
				expired.push({ //insert expired ingredients into expired array
                    ingredient: ingredient.name,
                    storageId: bundle._id,
					amount: bundle.amount,

                });
				ingredient.TotalAmount -= bundle.amount; //remove expired ingredients from total
				storage.splice(j,1) //remove expired ingredients from storage
			}
            else if (diffInDays <= 3) {
                expiring_soon.push({
                    ingredient: ingredient.name,
					amount: bundle.amount,
                    storageId: bundle._id,
                    daysUntilExpiration: diffInDays,
                });
            }
        }
    }

	RestaurantObj["ingredients_expired"] = expired
	RestaurantObj["ingredients_expiring_soon"] = expiring_soon

	restaurant_db.updateExpiringIngredients(RestaurantObj)
	let User = await userDB.getUser({"_id":restaurant.owner_id})
	notify.sendNotification("Expired Ingredients",User)
    //return [expiring_soon,expired] //returns array of items expiring in 72 hours, and already expired
}

async function checkIngredientsThreshold(RestaurantObj) {
	let ingredients = await restaurant_db.getIngredients(RestaurantObj)
	let recipes = await restaurant_db.getRecipes(RestaurantObj);
	let thresholds = [];

	for (let i = 0; i < recipes.length; i++) {
		let recipe = recipes[i];
		let recipeIngredients = recipe.ingredients;
		let dailyProduced = recipe.daily_produced;

		for (let j = 0; j < recipeIngredients.length; j++) {
			let recipeIngredient = recipeIngredients[j];
			let recipeIngredientName = recipeIngredient.name;
			let recipeIngredientAmount = recipeIngredient.amount;

			for (let k = 0; k < ingredients.length; k++) {
				let ingredient = ingredients[k];
				let ingredientName = ingredient.name;
				let ingredientAmount = ingredient.TotalAmount;

				if (ingredientName === recipeIngredientName) {
					let totalRequired = dailyProduced * recipeIngredientAmount; //100
					let remainingAmount = ingredientAmount - totalRequired;//99-100 = 1

					if (remainingAmount < ingredient.minimum_needed) {
						let amt_below_thresh = ingredient.minimum_needed - Math.abs(remainingAmount);
						thresholds.push({"name": ingredientName, "current_amount": amt_below_thresh, "threshold": ingredient.minimum_needed});
					}
				}
			}
		}
	}
	let User = await userDB.getUser({"_id":restaurant.owner_id})
	notify.sendNotification("Low Ingredients",User)
	//return thresholds;
}


module.exports = {
    sortStorageByShelfLife,
    consumeIngredients,
    getExpiringIngredients,
	checkIngredientsThreshold
}