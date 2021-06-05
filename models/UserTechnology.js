//Imports............................................
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserTechnology extends Model {}


//TABLE//UserTechnology...............................
UserTechnology.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    techid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'technology',
        key: 'id',
      },
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'usertechnology',
  }
);


//Exports............................................
module.exports = UserTechnology;
