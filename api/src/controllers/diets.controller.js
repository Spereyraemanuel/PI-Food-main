

const getDiets = async (req, res) => {
    try {
      let diets = await Diet.findAll();
      if (diets.length === 0) {
        const response = await axios.get(`${API_URL}/types`);
        const dietsData = response.data.map((diet) => ({ name: diet.name }));
        diets = await Diet.bulkCreate(dietsData);
      }
      res.json(diets);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };

  module.exports = getDiets