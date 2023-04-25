const express = require("express");
const router = express.Router();
const Recipe = require("../data/recipe");

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:uid", async (req, res) => {
  try {
    const uid = req.params.uid;
    const recipes = await Recipe.find({ "uid" :  uid });
console.log("recipes",recipes );
    if (!recipes || recipes.length === 0) {
      return res.status(404).json({ message: "Recipes not found" });
    }

    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, ingredients, uid } = req.body;
    const newRecipe = new Recipe({ name, ingredients, uid });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
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

router.delete("/", async (req, res) => {
  try {
    const recipes = await Recipe.deleteMany({});
    res.json({ message: "All recipes deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
