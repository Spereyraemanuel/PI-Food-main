const { Router } = require("express")
const router = Router()

const recipes = require ("./recipesRouter")
const types = require("./typeRouter")
const recipe = require("./recipeRouter")



router.use("/recipes", recipes);
router.use("/recipe",recipe);
router.use("/types", types);

  
  module.exports = router;


