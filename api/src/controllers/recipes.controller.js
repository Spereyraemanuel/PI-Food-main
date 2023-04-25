const axios = require('axios');
const {Recipe, Diets} = require("../db")
const { API_KEY } = process.env;
// const Recipe = require('../models/Recipe');

const getApiInfo = async (id) => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
    const recipeData =  await apiUrl.data.results.map(e =>{
    return {
      id: recipeData.id,
      name: recipeData.title,
      image: recipeData.image,
      typeDiets: e.diets.map((d)=> {return{name:d}}), // un array con los tipos de dieta de esa receta
      dishTypes: e.dishTypes.map((d)=> {return{name:d}}), 
      summary: recipeData.summary,
      healthScore: recipeData.healthScore,
      instructions: recipeData.instructions,
    };
  })
    return response;
  } catch (error) {
    throw new Error('Error al obtener la receta desde la API');
  }
};

const getDBInfo = async () => {
return await Recipe.findAll({
  include : {
    model : Diets,
    attributes : ["name"],
    through: {
      attributes:[]
    }
  }
})
}

const getAllRecipes = async () => {
  const apiInfo = await getApiInfo()
  const dbInfo = await getDBInfo()
  const allRecipes = [...apiInfo,...dbInfo]
  return allRecipes;
}


module.exports = {
  getAllRecipes,
  getDBInfo,
  getApiInfo,
};