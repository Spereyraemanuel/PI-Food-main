const { Router } = require('express');
const router = Router();
const { Diet } = require('../db');
const { getDiet } = require("../controllers/dietsControllers")


router.get("/", async(req, res) => {
    try {
        const dbRes = await getDiet()
        res.status(200).json({dbRes})       
    } catch (error) {
        res.status(400).json({err: error.message})
    }
})

router.get("/db", async (req, res) => {
    try {
        const dbRes = await Diet.findAll()
        res.status(200).json(dbRes)       
    } catch (error) {
        res.status(400).json({err: error.message})
    }
})


module.exports = router;