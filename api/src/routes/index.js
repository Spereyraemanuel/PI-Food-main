const { Router } = require("express");
const router = Router();
const recipes = require("./router_models/recipes.js");
const diets = require("./router_models/diets.js");
const recipe = require("./router_models/recipe.js");

router.use("/recipes/name", recipes)
router.use("/:id", recipe)
router.use("/", diets)
  
  module.exports = router;


