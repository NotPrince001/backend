const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_URL ||
    "postgresql://neondb_owner:npg_KD3orBlOwzR5@ep-little-bread-a81zu2xc-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
  {
    dialect: "postgres",
    logging: false,
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to PostgreSQL using Sequelize. ");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
  });

module.exports = sequelize;
