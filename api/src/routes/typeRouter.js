const { Router } = require('express');
const router = Router();
const { Diet }  = require('../db');
const {diets} = require('../controllers/dietsController')

router.get('/', async (req,res) => {
        diets.forEach(e => {
            Diet.findOrCreate({
                where: {name:e.name}
            })
        })

         const allTheTypes = await Diet.findAll();
        res.send(allTheTypes.map(e => e.name))
})

module.exports= router;