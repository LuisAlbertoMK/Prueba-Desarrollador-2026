const { body, validationResult } = require('express-validator');

/**
 * Validation rules for POST /api/register
 *
 * - name: required, min 3 chars, sanitized
 * - email: required, valid email format, normalized
 * - message: required, min 10 chars, sanitized
 */
const validateRegistration = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 3 }).withMessage('Name must be at least 3 characters')
    .escape(),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format')
    .normalizeEmail(),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
    .escape(),
];

/**
 * Middleware that checks validation results.
 * Returns 400 with structured errors if validation fails.
 */
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((e) => ({
        field: e.path,
        msg: e.msg,
      })),
    });
  }
  next();
};

module.exports = { validateRegistration, handleValidationErrors };
