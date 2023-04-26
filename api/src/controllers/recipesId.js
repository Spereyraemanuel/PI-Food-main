require('dotenv').config();
const recipeId = require('express').Router()
const axios = require('axios')
const {
 API_KEY
} = process.env;



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



module.exports = {
  // getAllRecipes,
  // getDBInfo,
  recipeid,
};