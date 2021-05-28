//Imports............................................
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {}


//TABLE//Profile...............................
Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profilepic: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    aboutme: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactme: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile',
  }
);


//Exports............................................
module.exports = Profile;