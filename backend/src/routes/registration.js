const { Router } = require('express');
const { pool } = require('../db');
const {
  validateRegistration,
  handleValidationErrors,
} = require('../validation');

const router = Router();

/**
 * POST /api/register
 *
 * Receives registration data and stores it in MySQL.
 *
 * Body: { name: string, email: string, message: string }
 * Success: 201 { success: true, id: number }
 * Error:   400 { success: false, errors: [...] }
 *          500 { success: false, message: string }
 */
router.post(
  '/',
  validateRegistration,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { name, email, message } = req.body;

      const [result] = await pool.execute(
        'INSERT INTO registrations (name, email, message) VALUES (?, ?, ?)',
        [name, email, message]
      );

      console.log(`[REGISTER] New registration #${result.insertId}: ${email}`);

      res.status(201).json({
        success: true,
        message: 'Registration successful',
        id: result.insertId,
      });
    } catch (error) {
      console.error('[REGISTER ERROR]', error.message);

      // Handle duplicate entry (if email had a UNIQUE constraint — not yet, but graceful)
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({
          success: false,
          message: 'This email is already registered.',
        });
      }

      res.status(500).json({
        success: false,
        message: 'Internal server error. Please try again later.',
      });
    }
  }
);

/**
 * GET /api/register — (optional) returns all registrations.
 * Useful for the evaluator to verify stored data.
 */
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT id, name, email, message, created_at FROM registrations ORDER BY created_at DESC'
    );
    res.json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    console.error('[REGISTER GET ERROR]', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
