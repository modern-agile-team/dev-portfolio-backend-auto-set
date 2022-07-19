import mysql from 'mysql2';

const pool: mysql.Pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PSWORD,
  database: process.env.DATABASE,
  port: 3306,
  connectionLimit: 10,
});

export default pool;
