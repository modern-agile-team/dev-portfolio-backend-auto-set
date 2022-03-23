import * as mariadb from 'mariadb';

const publicdb = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSWORD,
  database: process.env.DB_DATABASE_PUBLIC,
  port: 3306,
  connectionLimit: 5,
  multipleStatements: true,
});

const sampledb = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSWORD,
  database: process.env.DB_DATABASE_SAMPLE,
  port: 3306,
  connectionLimit: 5,
  multipleStatements: true,
});

export {publicdb, sampledb};
