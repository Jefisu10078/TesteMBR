import type { Knex } from "knex";
import path from 'path';
require('dotenv-safe').config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql",
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.resolve(__dirname,'src','database','migrations')
    },
    seeds: {
      directory: path.resolve(__dirname,'src','database','seeds')
    }
  },

  staging: {
    client: "mysql",
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.resolve(__dirname,'src','database','migrations')
    },
    seeds: {
      directory: path.resolve(__dirname,'src','database','seeds')
    }
  },

  production: {
    client: "mysql",
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.resolve(__dirname,'src','database','migrations')
    },
    seeds: {
      directory: path.resolve(__dirname,'src','database','seeds')
    }
  }

};

module.exports = config;
