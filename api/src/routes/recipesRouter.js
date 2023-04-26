const { Router } = require('express');
const router = Router();
const axios = require('axios');
const {getAllRecipes, getAallRecipes} = require('../controllers/recipeController')
const{Recipe,TypeDiet} = require('../db')




router.get('/:id',async (req,res) =>{
    const {id} = req.params
    const allRecipes = await getAllRecipes()
    let validate = id.includes("-"); // si tiene el guion es porque se encuentra en la base de datos

    if (validate) {
      try {
      const result = await getApiInfo();
      res.send(result);

  else {
    try {
      if (id) {
        let recipeId = await allRecipes.filter((el) => el.id === parseInt(id));
        recipeId.length
          ? res.status(200).send(recipeId)
          : res.status(400).send("Not fuound");
      }
    } catch (err) {
      res.json({ message: err });
    }
  }
});






module.exports= router;