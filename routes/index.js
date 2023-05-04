const express = require("express");
const router = express.Router();
const recipeRoutes = require("./recipeRoutes");
const inventoryRoutes = require("./inventoryRoutes");
const userRoutes = require("./userRoutes")
// const isAuthenticated = require("./authMiddleware");

router.use("/recipe", recipeRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/user", userRoutes);
// router.use("/recipe", isAuthenticated, recipeRoutes);
// router.use("/inventory", isAuthenticated, inventoryRoutes);
// router.use("/user", isAuthenticated, userRoutes);


module.exports = router;
