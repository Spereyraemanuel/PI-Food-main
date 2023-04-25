const { Router } = require("express");
const router = Router();
const recipes = require("./router_models/recipes");
const diets = require("./router_models/diets");
const recipe = require("./router_models/recipe");

router.use("/recipes", recipes)
router.use("/recipes", recipe)
router.use("/recipes", diets)
  
  module.exports = router;


