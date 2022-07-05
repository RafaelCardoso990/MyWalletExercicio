import pg from "pg";
import "./setup.js";

const { Pool } = pg;

const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
});

console.log("connection sucefulled")

export default connection;
