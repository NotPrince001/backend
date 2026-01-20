const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://neondb_owner:npg_KD3orBlOwzR5@ep-little-bread-a81zu2xc-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
});

console.log("this is env", process.env.DATABASE_URL);

pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err.stack));

module.exports = pool;
