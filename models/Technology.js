//Imports............................................
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Technology extends Model {}


//TABLE//Technology...............................
Technology.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    techname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'technology',
  }
);


//Exports............................................
module.exports = Technology;