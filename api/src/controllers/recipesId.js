require('dotenv').config();
const { Router } = require('express')
const axios = require('axios')
const {
 API_KEY
} = process.env;

const url = `https://api.spoonacular.com/recipes/{id}/information`
const { Recipe, TypeDiet } = require("../models/Recipe");

 recipeId.get("/recipe/:id",async (res,req) => {
try {
  let filterRecipe;
  //si le id pertenece a la bd busca y trae la informacion de la base de datos
 
}catch(error){

}
 });

// const getDBInfo = async () => {
// return await Recipe.findAll({
//   include : {
//     model : Diets,
//     attributes : ["name"],
//     through: {
//       attributes:[]
//     }
//   }
// })
// }

// const getAllRecipes = async () => {
//   const apiInfo = await getApiInfo()
//   const dbInfo = await getDBInfo()
//   const allRecipes = [...apiInfo,...dbInfo]
//   return allRecipes;
// }


module.exports = {
  // getAllRecipes,
  // getDBInfo,
  recipeid,
};