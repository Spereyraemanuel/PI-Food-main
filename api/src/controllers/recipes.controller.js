const getRecipeById = async (req, res) => {
    const { idRecipe } = req.params;
    try {
      const recipe = await Recipe.findByPk(idRecipe, {
        include: Diet,
      });
      if (!recipe) {
        return res.status(404).send('Recipe not found');
      }
      res.json(recipe);
    } catch (error) {
      console.error(error);
      res.status(400).send('Server error');
    }
  };

  const getRecipesByName = async (req, res) => {
    const { name } = req.query;
    try {
      const recipes = await Recipe.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: Diet,
      });
      if (recipes.length === 0) {
        return res.status(404).send('No recipes found');
      }
      res.json(recipes);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };

  const createRecipe = async (req, res) => {
    const {
      name,
      summary,
      healthScore,
      instructions,
      diets,
    } = req.body;
    try {
      const newRecipe = await Recipe.create({
        name,
        summary,
        healthScore,
        instructions,
      });
      await newRecipe.addDiets(diets);
      res.json(newRecipe);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };
  module.exports = getRecipeById, createRecipe, getRecipesByName