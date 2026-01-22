/**
 * @fileoverview Example of code with proper error handling and guard clauses.
 * This refactored version demonstrates best practices for handling errors and edge cases.
 */

/**
 * Custom error class for validation errors.
 * @class ValidationError
 * @extends {Error}
 */
class ValidationError extends Error {
  /**
   * Creates a ValidationError instance.
   * @param {string} message - Error message describing the validation failure
   */
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Calculates the average score from an array of student scores with proper error handling.
 * @param {Array<number>} scores - Array of student scores
 * @param {number} totalPossible - Total possible points
 * @returns {number} The average percentage score
 * @throws {ValidationError} If inputs are invalid or empty
 */
function calculateAverageScore(scores, totalPossible) {
  // Guard clause: Check if scores array is provided
  if (!Array.isArray(scores)) {
    throw new ValidationError('Scores must be an array');
  }

  // Guard clause: Check if array is empty
  if (scores.length === 0) {
    throw new ValidationError('Scores array cannot be empty');
  }

  // Guard clause: Check if totalPossible is valid
  if (typeof totalPossible !== 'number' || isNaN(totalPossible)) {
    throw new ValidationError('Total possible points must be a valid number');
  }

  // Guard clause: Check if totalPossible is positive
  if (totalPossible <= 0) {
    throw new ValidationError('Total possible points must be greater than zero');
  }

  // Guard clause: Validate all scores are valid numbers
  for (let i = 0; i < scores.length; i++) {
    if (typeof scores[i] !== 'number' || isNaN(scores[i])) {
      throw new ValidationError(`Score at index ${i} must be a valid number`);
    }
    if (scores[i] < 0) {
      throw new ValidationError(`Score at index ${i} cannot be negative`);
    }
    if (scores[i] > totalPossible) {
      throw new ValidationError(`Score at index ${i} cannot exceed total possible points`);
    }
  }

  // Calculate average with confidence that inputs are valid
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  const average = sum / scores.length;
  const percentage = (average / totalPossible) * 100;

  // Guard clause: Ensure result is valid
  if (isNaN(percentage) || !isFinite(percentage)) {
    throw new ValidationError('Calculated percentage is invalid');
  }

  return percentage;
}

/**
 * Processes user data and extracts their full name with proper error handling.
 * @param {Object} user - User object containing name information
 * @param {string} user.firstName - User's first name
 * @param {string} user.lastName - User's last name
 * @returns {string} Full name of the user
 * @throws {ValidationError} If user object or name fields are invalid
 */
function getUserFullName(user) {
  // Guard clause: Check if user object is provided
  if (!user || typeof user !== 'object') {
    throw new ValidationError('User object must be provided');
  }

  // Guard clause: Check if firstName exists and is valid
  if (!user.firstName || typeof user.firstName !== 'string') {
    throw new ValidationError('User must have a valid first name');
  }

  // Guard clause: Check if lastName exists and is valid
  if (!user.lastName || typeof user.lastName !== 'string') {
    throw new ValidationError('User must have a valid last name');
  }

  // Guard clause: Check if names are not empty strings
  if (user.firstName.trim().length === 0) {
    throw new ValidationError('First name cannot be empty');
  }

  if (user.lastName.trim().length === 0) {
    throw new ValidationError('Last name cannot be empty');
  }

  return `${user.firstName.trim()} ${user.lastName.trim()}`;
}

/**
 * Divides two numbers with proper error handling.
 * @param {number} dividend - The number to be divided
 * @param {number} divisor - The number to divide by
 * @returns {number} The result of the division
 * @throws {ValidationError} If inputs are invalid or division by zero is attempted
 */
function divide(dividend, divisor) {
  // Guard clause: Check if dividend is a valid number
  if (typeof dividend !== 'number' || isNaN(dividend)) {
    throw new ValidationError('Dividend must be a valid number');
  }

  // Guard clause: Check if divisor is a valid number
  if (typeof divisor !== 'number' || isNaN(divisor)) {
    throw new ValidationError('Divisor must be a valid number');
  }

  // Guard clause: Prevent division by zero
  if (divisor === 0) {
    throw new ValidationError('Cannot divide by zero');
  }

  const result = dividend / divisor;

  // Guard clause: Ensure result is valid
  if (!isFinite(result)) {
    throw new ValidationError('Division result is not a finite number');
  }

  return result;
}
