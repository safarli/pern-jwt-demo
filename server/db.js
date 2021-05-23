const { Pool } = require("pg");

const pool = new Pool({
  host: "db-wavevo.cs4fvunkgxjn.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "!Doke99a3!",
  port: 5432,
  database: "authtodo"
});

module.exports = pool;
