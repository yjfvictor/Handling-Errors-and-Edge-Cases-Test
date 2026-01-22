/**
 * @fileoverview Example of code without proper error handling.
 * This function demonstrates common issues with missing error handling.
 */

/**
 * Calculates the average score from an array of student scores.
 * @param {Array} scores - Array of student scores
 * @param {number} totalPossible - Total possible points
 * @returns {number} The average percentage score
 */
function calculateAverageScore(scores, totalPossible) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  const average = sum / scores.length;
  const percentage = (average / totalPossible) * 100;
  return percentage;
}

/**
 * Processes user data and extracts their full name.
 * @param {Object} user - User object containing name information
 * @returns {string} Full name of the user
 */
function getUserFullName(user) {
  return user.firstName + ' ' + user.lastName;
}

/**
 * Divides two numbers.
 * @param {number} dividend - The number to be divided
 * @param {number} divisor - The number to divide by
 * @returns {number} The result of the division
 */
function divide(dividend, divisor) {
  return dividend / divisor;
}
