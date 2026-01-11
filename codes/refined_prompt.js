/**
 * Refined prompt with full error handling + edge cases
 * @param {number} a
 * @param {number} b  
 * @returns {number}
 * @throws {Error}
 */
function addNumbers(a, b) {
  if (a === undefined || a === null || b === undefined || b === null) {
    throw new Error('Both inputs must be defined and non-null');
  }
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error(`Invalid input: '${a}' and '${b}' must both be finite numbers`);
  }
  return a + b;
}
