import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

try {
  const result = await pool.query(
    'SELECT id, email, name FROM "user" WHERE email = $1',
    ['emma.wilson@example.com']
  );
  
  if (result.rows.length > 0) {
    console.log('[SUCCESS] User found:', result.rows[0]);
  } else {
    console.log('[INFO] User not found');
  }
  process.exit(0);
} catch (error) {
  console.error('[ERROR]', error.message);
  process.exit(1);
} finally {
  await pool.end();
}
