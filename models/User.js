const { DataTypes } = require("sequelize");
const sequelize = require("../src/db_connect/sequelize");

// Define the User model
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  isLoggedIn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  school: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthCity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
