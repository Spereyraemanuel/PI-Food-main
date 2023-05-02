const  { getDiets } = require("../controllers/dietsControllers");

const getDietsHandler = async (req, res) => {
  try {
    const dietas = await getDiets();
    return res.status(200).json(dietas);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDietsHandler,
};