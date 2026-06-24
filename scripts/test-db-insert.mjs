import { Pool } from 'pg';
import crypto from 'crypto';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

try {
  const userId = crypto.randomUUID();
  const result = await pool.query(
    'INSERT INTO "user" (id, email, name, emailVerified) VALUES ($1, $2, $3, $4) RETURNING *',
    [userId, 'testdb' + Date.now() + '@example.com', 'Test User', false]
  );
  console.log('[SUCCESS] Inserted user:', result.rows[0]);
  process.exit(0);
} catch (error) {
  console.error('[ERROR]', error.message);
  console.error(error);
  process.exit(1);
} finally {
  await pool.end();
}
