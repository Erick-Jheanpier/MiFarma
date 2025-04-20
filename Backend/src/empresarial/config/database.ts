import mysql from 'mysql2/promise';


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Erick2000',
  port: 3306,
  database: 'mifarma',
});

export default pool;
