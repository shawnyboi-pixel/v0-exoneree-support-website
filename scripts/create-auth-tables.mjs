import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const tables = [
  `CREATE TABLE IF NOT EXISTS "user" (
    id TEXT PRIMARY KEY NOT NULL,
    email TEXT NOT NULL UNIQUE,
    name TEXT,
    emailVerified BOOLEAN NOT NULL DEFAULT FALSE,
    image TEXT,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS "session" (
    id TEXT PRIMARY KEY NOT NULL,
    expiresAt TIMESTAMP NOT NULL,
    token TEXT NOT NULL UNIQUE,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ipAddress TEXT,
    userAgent TEXT,
    userId TEXT NOT NULL,
    FOREIGN KEY (userId) REFERENCES "user"(id) ON DELETE CASCADE
  )`,
  `CREATE TABLE IF NOT EXISTS "account" (
    id TEXT PRIMARY KEY NOT NULL,
    userId TEXT NOT NULL,
    type TEXT NOT NULL,
    provider TEXT NOT NULL,
    providerAccountId TEXT NOT NULL,
    refreshToken TEXT,
    accessToken TEXT,
    expiresAt INTEGER,
    tokenType TEXT,
    scope TEXT,
    idToken TEXT,
    sessionState TEXT,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES "user"(id) ON DELETE CASCADE,
    UNIQUE(provider, providerAccountId)
  )`,
  `CREATE TABLE IF NOT EXISTS "verification" (
    id TEXT PRIMARY KEY NOT NULL,
    identifier TEXT NOT NULL,
    token TEXT NOT NULL,
    expires TIMESTAMP NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(identifier, token)
  )`,
  `CREATE INDEX IF NOT EXISTS "user_email_idx" ON "user"(email)`,
  `CREATE INDEX IF NOT EXISTS "session_userId_idx" ON "session"(userId)`,
  `CREATE INDEX IF NOT EXISTS "session_token_idx" ON "session"(token)`,
  `CREATE INDEX IF NOT EXISTS "account_userId_idx" ON "account"(userId)`,
  `CREATE INDEX IF NOT EXISTS "verification_identifier_idx" ON "verification"(identifier)`,
];

async function main() {
  try {
    console.log('[CREATE] Starting table creation...');
    
    for (const sql of tables) {
      console.log('[CREATE]', sql.substring(0, 50) + '...');
      await pool.query(sql);
    }
    
    console.log('[SUCCESS] All tables created');
    process.exit(0);
  } catch (error) {
    console.error('[ERROR]', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

main();
