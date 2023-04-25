const { DataTypes } = require("sequelize");
module.exports = (Sequelize)=> {
    Sequelize.define("typeDiet", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,  
         },
        name: {
            type: DataTypes.STRING,
        },
    });
};