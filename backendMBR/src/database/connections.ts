import knex from 'knex';
require('dotenv-safe').config();

const db = knex({
    client:  process.env.DB_CONNECTION,
    connection:{
        host : process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    }
});

export default db;