import { add, subtract, multiply, divide } from "./calculator";

const a = 10;
const b = 5;

console.log(`Addition: ${a} + ${b} = ${add(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${subtract(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);

try {
  console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);
} catch (error) {
  console.error(`Error in division: ${error.message}`);
}

// This will cause an error
try {
  divide(a, 0);
} catch (error) {
  console.log(`Division by zero error: ${error.message}`);
}
