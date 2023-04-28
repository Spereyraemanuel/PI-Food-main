const { Router } = require('express');
const recipesRouter = Router();
// const { Recipe, TypeDiet } = require('../db');
const { apiInfo } = require("../controllers/recipeController")

recipeRouter.get("/", getApiInfo)

// recipeRouter.get("/:id", async(req, res)=> {
//   try {
//     const  { id } = req.params;
//   //checkeamos si la receta existe en la base de datos,
//   const recipe = await Recipe.findByPk(id, {
//       include: {
//         model:TypeDiet,
//         attributes: ["name"],
//         through: {
//           attributes:[],
//         },
//       },
//     });
//     if(!recipe){
//       //si la receta no existe que la busque desde la api,
//       recipe = await getApiInfo(id);
//      if(!recipe){
//       //si tampoco se encuenta en la api, que arroje un error 400;
//       res.status(400).json({message: "La recete no existe"})
//      }
//     }
//     res.status(200).json(recipe);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// })

// recipeRouter.get("/title", async (req, res)=> {
//   try {
//     const {title} = req.query
//     const recipes = await Recipe.findAll({
//       where: { //clausula de sql, que perime especificar condiciones para filtrado
//         name: {
//           [Op.iLike]: `%${title}%`, //[Op.iLike] sirve para ignorar mayusculas y minusculas, 
//           // y el % sirve para buscar en la cadena de texto cualquier posiion de valor en la columna name
//          },
//       },
//       include:{
//         model: TypeDiet,
//         attributes:["name"],
//         through:{
//           attributes: [],
//         }
//       }
//     });
//     if(recipes.length === 0){
//       //si la receta no esta en la base de datos, que la obtenga desde la api;
//       const apiRecipes = await getApiInfo(null, title);


//       res.status(200).json(apiRecipes);
//     }

//     res.status(200).json(recipes);
//   }catch (error){
//     res.status(400).json({message: error.message})
//   }
// })








module.exports= recipeRouter;