import { config } from "dotenv";
import knex from "knex";
import pg from "pg";

config();

// parse numeric types as floats
pg.types.setTypeParser(pg.types.builtins.NUMERIC, parseFloat);

const db = knex({ client: "pg", connection: process.env.DATABASE_URL });
export default db;
