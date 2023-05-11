const { Router } = require('express');
const { Recipe, Diet } = require('../db');
const router = Router();
const { getConcat, getIdRecipes } = require('../controllers/recipeController');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', async (req, res, next) => {
  const { name } = req.query;
  const dbRecipes = await getConcat(next);
  try {
    if (name) {
      const resultFind = dbRecipes.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
      if (resultFind.length === 0) {
        return res.status(404).json({ message: 'No recipes found' });
      }
      return res.status(200).json(resultFind);
    } else {
      return res.status(200).json(dbRecipes);
    }
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const idRecipes = await getIdRecipes(id);
  return res.send(idRecipes);
});

router.post('/', async (req, res) => {
  try {
    const { name, summary, healthScore, image, steps, diets} = req.body;
   
    const newRecipe = await Recipe.create({
      name,
      summary,
      healthScore,
      image,
      steps,
      
});

if (Array.isArray(diets)) {
  for (const dietName of diets) {
    const agregar = await Diet.findAll({
      where: { name: dietName }
    });
    if (agregar.length > 0) {
      await newRecipe.addDiets(agregar[0]);
    }
  }
} else {
  throw new Error("Diets must be an array.");
}
    res.status(201).send(newRecipe);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Recipe.destroy({
    where: {
      id
    }
  })
    .then(() => {
      res.send('Recipe deleted');
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
