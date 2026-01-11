/**
 * Few-shot prompted version with examples
 */
function addNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

// Test cases from few-shot examples
console.log(addNumbers(5, 3));  // 8
console.log(addNumbers(0, 0));  // 0