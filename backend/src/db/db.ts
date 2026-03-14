import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',          
  host: 'localhost',
  database: 'todo_rpg',      
  password: 'password',   
  port: 5432,                
});

export default pool;