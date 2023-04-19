const express = require("express");
const router = express.Router();
const recipeRoutes = require("./recipeRoutes");
const inventoryRoutes = require("./inventoryRoutes");

router.use("/recipe", recipeRoutes);
router.use("/inventory", inventoryRoutes);

module.exports = router;
