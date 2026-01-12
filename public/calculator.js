// State management
let firstValue = 0;
let operator = null;
let waitingForSecondValue = false;

// Power operation (handles 2^3 = 8)
function powerOperation(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new Error('Base and exponent must be numbers');
  }
  return Math.pow(base, exponent);
}

// Main operation handler (+, -, *, /, ^)
function operationPressed(op) {
  const display = document.querySelector('.display');
  const currentValue = parseFloat(display.textContent) || 0;

  if (waitingForSecondValue) {
    const result = calculate(firstValue, operator, currentValue);
    display.textContent = result;
    firstValue = result;
  } else {
    firstValue = currentValue;
  }

  operator = op;
  waitingForSecondValue = true;
}

function calculate(first, op, second) {
  switch (op) {
    case '+': return first + second;
    case '-': return first - second;
    case '*': return first * second;
    case '/': return second !== 0 ? first / second : 'Error';
    case '^': return powerOperation(first, second);
    case '√': return Math.sqrt(first) || 'Error';  // ← ADD THIS
    default: return second;
  }
}

