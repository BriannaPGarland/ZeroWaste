const ingredients_db = require('./ingredientsDB')

async function createNewExpiringDate(ingredient) { //added ingredient must have ingredient.shelf_life_type
    ingredient = await ingredients_db.getIngredients(ingredient)

    let days = 0;
    let weeks = 0;
    let months = 0;

    if (ingredient.shelf_life_type === "shelf_life") {
        if (!isNaN(parseInt(ingredient.shelf_life))) {
            chosen_life = "shelf_life"
        } else {
            chosen_life = "fridge_life"
        }
        const shelf_life = ingredient[chosen_life].split("-");
        if (shelf_life.length === 2) {
            days = parseInt(shelf_life[1]);
        } else if (shelf_life.length === 1) {
            days = parseInt(shelf_life[0]);
        }

    } 
    else if (ingredient.shelf_life_type === "fridge_life") {
        const fridge_life = ingredient.fridge_life.split("-");
        if (fridge_life.length === 2 && fridge_life[1] === "weeks") {
            weeks = parseInt(fridge_life[0]);
        } else if (fridge_life.length === 2 && fridge_life[1] === "days") {
            days = parseInt(fridge_life[0]);
        }
    } 
    else if (ingredient.shelf_life_type === "freezer_life") {
        if (!isNaN(parseInt(ingredient.freezer_life))) {
            chosen_life = "freezer_life";
        } else {
            chosen_life = "fridge_life"
        }
        const freezer_life = ingredient[chosen_life].split("-");
        if (freezer_life.length === 2) {
            if (freezer_life[1].search("months")!==-1){
                months = parseInt(freezer_life[0]);
            }
            else if (freezer_life[1].search("weeks")!==-1){
                weeks = parseInt(freezer_life[0]);
            }
            else if (freezer_life[1].search("days")!==-1){
                days = parseInt(freezer_life[0]);
            }
        } 
        else if (freezer_life.length === 1) {
            days = parseInt(freezer_life[0]);
        }
    }

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    expirationDate.setDate(expirationDate.getDate() + weeks * 7);
    expirationDate.setMonth(expirationDate.getMonth() + months);

    return expirationDate;
}


//createNewExpiringDate({"name": "Apple"},"freezer_life")

module.exports = {createNewExpiringDate}