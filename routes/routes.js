const express = require("express");
const router = express.Router();
const Recipe = require("../data/model");

//Error Handling To Be Implememted
// router.use((req, res) => {
//   res.status(404).send("No Route Found");
// });

// router.get("/", (req, res) => {
//   res.send("Get Request is running!");
// });

// router.post("/", (req, res) => {
//   res.send("Recipe Post Request is running!");
// });

// router.get("/recipe", (req, res) => {
//   res.send("Recipe GET Request is running!");
// });

// router.post("/recipe", (req, res) => {
//   res.send("Recipe POST Request is running!");
// });

router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/recipes/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/recipes", async (req, res) => {
  try {
    const { name, ingredients } = req.body;
    //console.log({ name, ingredients });
    const newRecipe = new Recipe({ name, ingredients });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
    //console.log(req);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/recipes/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.json({ message: "Recipe deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
