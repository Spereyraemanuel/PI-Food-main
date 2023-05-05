const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRouter = require('./recipesRouter.js');
const dietsRouter  = require("./dietsRouter.js")

const router = Router();
router.use('/recipes', recipeRouter);
router.use('/diets', dietsRouter);


module.exports = router;
