const express = require("express");
const router = express.Router();
const recipeRoutes = require("./recipeRoutes");
const inventoryRoutes = require("./inventoryRoutes");
const userRoutes = require("./userRoutes");

router.use("/recipe", recipeRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/user", userRoutes);

module.exports = router;
