import { Pool } from 'pg';

if (!process.env.DATABASE_URL) {
  throw new Error('Please add your PostgreSQL URI to .env.local');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function query(text: string, params?: any[]) {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log('Executed query', { text, duration, rows: res.rowCount });
  return res;
}

export default pool; 