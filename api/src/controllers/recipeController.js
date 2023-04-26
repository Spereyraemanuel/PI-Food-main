const axios = require("axios");
const Recipe = require("../models/Recipe")

async function gedRecipeData(API_KEY, id){
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?api_key=${API_KEY}`);
        const dataRecipe = response.data.map((rec)=>{
        return {
            id: rec.id,
            title: rec.title,
            image: rec.image,
            summary: rec.summary,
            healtScore: rec.healtScore,
            instruction: rec.instruction,
        }});
    return dataRecipe
    } catch (error) {
        throw new Error(`No se pudo obtener la información de la api: ${error.message}`)
    }
    
}

module.exports = gedRecipeData;