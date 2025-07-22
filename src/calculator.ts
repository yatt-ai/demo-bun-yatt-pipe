/**
 * Add two numbers
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtract b from a
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiply two numbers
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divide a by b
 * @throws {Error} When dividing by zero
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}
