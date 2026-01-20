const User = require("./User");
const Code = require("./Code");

// Define associations
User.hasMany(Code, { foreignKey: "user_id" });
Code.belongsTo(User, { foreignKey: "user_id" });

module.exports = { User, Code };

// ✅ Problem: Circular Dependency
// Association is made to avoid a circular dependency between User.js and Code.js. Here’s what’s happening:

// In User.js, you import Code.js.

// In Code.js, you import User.js.

// This circular import causes one of the models (User) to be undefined at the time of association, leading to the not a subclass of Sequelize.Model error.
