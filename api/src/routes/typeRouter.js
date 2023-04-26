const { Router } = require('express');
const router = Router();
const {TypeDiet} = require('../db');
const {diets} = require('../controllers/dietsController')

router.get('/', async (req,res) => {
        diets.forEach(e => {
            TypeDiet.findOrCreate({
                where: {name:e.name}
            })
        })

         const allTheTypes = await TypeDiet.findAll();
        res.send(allTheTypes.map(e => e.name))
})

module.exports= router;