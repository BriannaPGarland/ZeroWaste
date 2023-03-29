//Restaurant API Methods for MongoDB
const restaurant_db = require('./restaurantsDB')

const notify = require('./notify')

async function sortStorageByShelfLife(Storage) {
    Storage.sort((a, b) => {
      const dateA = new Date(a.shelf_life);
      const dateB = new Date(b.shelf_life);
      return dateA - dateB;
    });
    return Storage;
}

async function consumeIngredients(object, name, amount){
	let ingredients = restaurant_db.getIngredients(object)
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

async function deleteExpiredStoredIngredient(object,name){

}

async function updateExpiringSoon(ingredients){
    let expiringIngredients = []

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
            if (diffInDays <= 2) {
                expiringIngredients.push({
                    ingredient: ingredient.name,
                    storageId: bundle._id,
                    daysUntilExpiration: diffInDays,
                });
            }
        }
    }
    return expiringIngredients
}


module.exports = {
    sortStorageByShelfLife,
    consumeIngredients,
    updateExpiringSoon
}