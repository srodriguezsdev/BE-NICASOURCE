/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable @typescript-eslint/no-var-requires
/* eslint-disable no-undef */
const fs = require('fs');
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config()

const pool = new Pool({
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT
});

console.log({
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT
})

// read SQL files
const seedTablesSql = fs.readFileSync('src/seeder/seed_tables.sql').toString();

// split the file into separate queries
const queries = seedTablesSql.split(';').filter(query => query.trim() !== '');

// execute each query
(async () => {
  for (const query of queries) {
    try {
      await pool.query(query);
      console.log(`Query executed successfully: ${query}`);
    } catch (error) {
      pool.end();
      console.error(`Error executing query: ${query}`, error);
    }
  }

  // close connection
  await pool.end();
})();
