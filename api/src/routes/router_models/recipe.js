const { TypeDiet, Recipe } = require("../../db")
const { Router } = require("express");
const router = Router();

router.post("/", async (res,req) => {
    const {
        title,
        summary,
        healthScore,
        instructions,
        createdInDb,
    } = req.body
    if(!title || !summary) {
     res.status(400).send("Please, insert a title and a summary to continue!")
    }
    else{
        try {
            let createRecipe = await Recipe.createRecipe({
                title,
                summary,
                healthScore,
                instructions,
                createdInDb
            })
            let dietTypeDb = await TypeDiet.findAll({
                where:{
                    name:TypeDiet }
                 })
                 createRecipe.addDiet(dietTypeDb)
                 res.status(200).send("recipe created")
        } catch (err) {
            console.log(err)
        }
    }});

    router.delete("/:id", async (req, res) => {
        const {id} = req.params
     try {
        let recipe = await Recipe.findByPk(id)
        await recipe.destroy()
        res.status(200).send("Recipe deleted")
     } catch (e) {
        res.status(400).send("Recipe not found")
     }
    })

    module.exports = router;