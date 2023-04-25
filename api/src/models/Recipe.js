const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
   },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    summary: {
      type : DataTypes.TEXT,
      allowNull: false
    },
    healtScore: {
      type: DataTypes.STRING
    },
    instrunction: {
      type : DataTypes.TEXT,
    },
      createdInDb:{                                 
        type : DataTypes.BOOLEAN,                    
        allowNull: false,
        defaultValue: true
      },
  });
};
