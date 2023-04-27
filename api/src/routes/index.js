const { Router } = require('express');
const router = Router();
const recipeRouter = require("./recipesRouter")



router.use('/recipes', recipeRouter)
// router.use('/recipe', recipe)   
// router.use('/types', types)

module.exports = router;


