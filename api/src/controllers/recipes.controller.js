const getRecipeById = async (req, res) => {
    const { idRecipe } = req.params;
    try {
      const recipe = await Recipe.findByPk(idRecipe, {
        include: Diet,
      });
            await recipe.save();
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
  getRecipeById,
};  module.exports = getRecipeById, createRecipe, getRecipesByName