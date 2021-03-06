const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const siteRecipeRoutes = require("./siteRecipes");

// user routes
router.use("/users", userRoutes);

// siteRecipe Routes
router.use("/siterecipe", siteRecipeRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
