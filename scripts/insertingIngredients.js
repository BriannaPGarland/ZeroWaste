const fs = require('fs');
const parse = require('csv-parse').parse;
const dirnames = require("path").dirname
const fileURLToPath = require('url').fileURLToPath;

const ObjectId = require('mongodb').ObjectId;

const ingredients_db = require('./ingredientsDB')



const processFile = async () => {
  const records = [];
  const parser = fs
    .createReadStream(`items.csv`)
    .pipe(parse({
    // CSV options if any
    }));
  for await (const record of parser) {
    // Work with each record
    records.push(record);
  }
  return records;
};

// (async () => {
//     const records = await processFile();
//     for (index in records) {
//         if (index === 0)
//             continue

//         //console.log(records[index]) //Ingredients'[0], 'SHELF_LIFE'[1], 'FRIDGE_LIFE'[2], 'FREEZER_LIFE[3]' 
//         let newObj = {
//             _id: new ObjectId(),
//             name: records[index][0],
//             shelf_life: records[index][1],
//             fridge_life: records[index][2],
//             freezer_life: records[index][3]
//         }
//         await ingredients_db.insertIngredients(newObj)
//     }
// })();