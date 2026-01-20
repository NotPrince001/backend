const sequelize = require("./src/db_connect/sequelize");
const { User, Code } = require("./models/Assosiations");

async function syncModels() {
  try {
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error syncing models:", error);
  }
}

syncModels();
