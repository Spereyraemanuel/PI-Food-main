const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRouter = require('./recipesRouter.js');
const dietRouter = require('./dietsRouter.js');

const router = Router();
router.use('/recipes', recipeRouter);
router.use('/diets', dietRouter);


module.exports = router;
