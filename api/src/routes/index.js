const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRouter = require('./recipesRouter.js');
const dietRouter = require('./typeRouter.js');

const router = Router();
router.use('/recipes', recipeRouter);
router.use('/diets', dietRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
