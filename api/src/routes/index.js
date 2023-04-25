const { Router } = require("express");
const router = Router();
const { recipeid } = require("../controllers/recipesId.js");

router.use("/recipe/:id", recipeid)
router.use("/recipes/name", recipes)
router.use("/", diets)
  
  module.exports = router;


