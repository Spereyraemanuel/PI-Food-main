const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,  
   },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    healtScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    instrunction: {
      type: DataTypes.STRING,
      allowNull:false,
    },
  });
};
