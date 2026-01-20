const { DataTypes } = require("sequelize");
const sequelize = require("../src/db_connect/sequelize");

const Code = sequelize.define(
  "Code",
  {
    code_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // ✅ Auto-generates unique IDs
    },
    code_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    html_code: {
      type: DataTypes.TEXT, // ✅ Use TEXT to store long code
      allowNull: false,
    },
    css_code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    js_code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "Codes", // ✅ Explicit table name (optional)
    timestamps: true, // ✅ Adds createdAt & updatedAt fields
  }
);

module.exports = Code;
