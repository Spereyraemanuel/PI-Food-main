const express = require('express');
const router = express.Router();
const { Recipe, Diet } = require("../db")

router.get("/recipes/:idRecipe",  async (req, res) => {
    const { idRecipe } = req.params;
    // res.send("hola mundo")
    try {
      const RecipeId = await Recipe.findByPk(idRecipe, {
        include: Diet,
      });
      if (!RecipeId) {
        return res.status(404).send('Recipe not found');
      }
      res.json(RecipeId);
    } catch (error) {
      console.error(error);
      res.status(400).send('Server error');
    }
  })


// router.get('/recipes/name?api_key={API_KEY}', recipeController.getByName);


// router.post('/recipes?api_key={API_KEY}', recipeController.create);


// router.get('/diets?api_key={API_KEY}', dietController.getAll);


