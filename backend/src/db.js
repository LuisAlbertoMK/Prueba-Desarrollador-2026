const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  user: process.env.DB_USER || 'eventuser',
  password: process.env.DB_PASSWORD || 'eventpassword',
  database: process.env.DB_NAME || 'event_landing',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {},
});

/**
 * Initialize database — creates the registrations table if it doesn't exist.
 * If table already exists (e.g. pre-created by the deploy pipeline),
 * CREATE TABLE IF NOT EXISTS is a no-op, so this always succeeds.
 *
 * In restricted environments (e.g. TiDB Serverless without DDL grants),
 * we catch the error and log a warning — the table should already exist.
 */
const initDB = async () => {
  const connection = await pool.getConnection();
  try {
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS registrations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('[DB] Registrations table ready');
  } catch (err) {
    // Table might already exist (pre-created), or DDL may be restricted.
    // Either way, we continue — the app will fail later if the table is missing.
    console.warn('[DB] Could not CREATE TABLE (may already exist):', err.message);
    console.warn('[DB] Attempting to proceed — the table MUST exist or queries will fail.');
  } finally {
    connection.release();
  }
};

module.exports = { pool, initDB };
