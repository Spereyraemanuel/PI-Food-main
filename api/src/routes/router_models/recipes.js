const { Router } = require("express");
const router = Router();
axios = require("axios");
const { getAllRecipes,} = require("../../controllers/recipes.controller")
const { Recipe, TypeDiet } = require("../../db")


async function getAallRecipes(req, res) {
    await getAllRecipes();
      const { name } = req.query;                         
      if (!name) {                                       
        try {
          const recipeApiInfo = await getApiInfo()       
          const recipeBD = await Recipe.findAll({         
            include: {
              model: TypeDiet,                             
              attributes: ["name"],                      
              through: {
                attributes: [],
              },
            },
          });
          const recipes = await Promise.all(recipeBD.concat(recipeApiInfo))
          return res.send(recipes)
        } catch(err) {
          res.json({err})
          console.error(err);
      }
      } else {                                     
        const query = name.toLowerCase();       
        try {
          const recipeApiInfo = await getApiInfo()
          const recipeApi = recipeApiInfo.filter((r) =>{
            if(r.title.toLowerCase().includes(query)){     
              return r                                   
            }
           } 
          );
    
          const recipeBD = await Recipe.findAll({      
            where: {
              title:{[Sequelize.Op.like]:`%${query}%`}  
            },                  
            include : {
              model : TypeDiet,
              attributes : ['name'],               
              through: {
                  attributes:[]
              }
          },
          });
    
          const respuesta = await Promise.all(recipeBD.concat(recipeApi))
          if(respuesta.length===0) res.status(404).send('No se encontraron recetas')
          else res.status(200).send(respuesta)
        } catch (err) {
          console.error(err);
        }
      }
}

router.get('/:id', async (req, res) => {
    const {id} = req.params
    const allRecipes = await getAallRecipes()
    let validate = id.includes("-");

    if(validate) {
        try {
            let dbId = await Recipe.findBypk(id, {
                include: TypeDiet });
                res.status(200).json([dbId])
        } catch (error) {
            console.log(error);
        }
    }

    else{
        try {
            if (id){
                let recipeId = await allRecipes.filter((el)=> el.id === parseInt(id));
                recipeId.length
                ? res.status(200).sen(recipeId)
                : res.status(400).send("Not Found");
            }
        } catch (error) {
            res.json({ message: error});
        }
    }
})

module.exports = router;